import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import classnames from 'classnames';
import { Collapse } from 'react-collapse';
import debounce from 'lodash/debounce';

import DuplicateSmall from '../icons/DuplicateSmall';
import RevertSmall from '../icons/RevertSmall';
import CodeSmall from '../icons/CodeSmall';
import MagicWandSmall from '../icons/MagicWandSmall';

import { transformCode, formatCode } from './doctor-code';
import { CopyButton } from '../CopyButton';
import ToggleSwitch from '../ui/toggle-switch';
import TextButton from '../TextButton';
import { tokenHighlighter } from './token-highlighter';

import styles from './index.scss';

const safeTokenHighlighter = (code: string) => {
  try {
    return tokenHighlighter(code);
  } catch (e) {
    console.warn('Unable to tokenize code', e);
    return <span>{code}</span>;
  }
};

export interface Props {
  initialCode?: string;
  scope?: object;
  compact?: boolean;
  initiallyOpen?: boolean;
  previewRow?: boolean;
  previewProps?: object & { className?: string };
  autoRender?: boolean;
  darkBackground?: boolean;
  noBackground?: boolean;
  onChange?: Function;
  previewWarning?({ onConfirm: Function }): React.ReactNode | null;
}

interface State {
  initialFormattedCode: string;
  code: string;
  isRtl: boolean;
  isDarkBackground: boolean;
  isEditorOpened: boolean;
  parseError: object | null;
  renderPreview: boolean;
}

export default class LiveCodeExample extends React.PureComponent<Props, State> {
  debouncedOnCodeChange: () => any;

  static propTypes = {
    initialCode: PropTypes.string,
    scope: PropTypes.object,
    compact: PropTypes.bool,
    initiallyOpen: PropTypes.bool,
    previewRow: PropTypes.bool,
    previewProps: PropTypes.object,
    autoRender: PropTypes.bool,
    darkBackground: PropTypes.bool,
    noBackground: PropTypes.bool,
  };

  static defaultProps = {
    compact: false,
    initiallyOpen: false,
    previewRow: false,
    previewProps: {},
    autoRender: true,
    darkBackground: false,
    noBackground: false,
    onChange: () => {},
    scope: {},
  };

  constructor(props: Props) {
    super(props);

    this.debouncedOnCodeChange = debounce(this.onCodeChange, 100, {
      trailing: true,
    });

    const formattedCode = formatCode(props.initialCode);

    this.state = {
      initialFormattedCode: formattedCode,
      code: formattedCode,
      isRtl: false,
      isDarkBackground: props.darkBackground,
      isEditorOpened: !props.compact || props.initiallyOpen,
      parseError: null,
      renderPreview: !Boolean(props.previewWarning),
    };
  }

  componentDidUpdate(prevProps: Props) {
    const { renderPreview } = this.state;

    if (
      this.props.previewWarning !== prevProps.previewWarning &&
      typeof prevProps.previewWarning === 'function' &&
        renderPreview
    ) {
      this.setState({ renderPreview: false });
    }
  }

  prettifyCode = ({
    textAreaNode = null,
    prePrettifySelectionEnd = null,
  } = {}) => {
    try {
      this.setState(
        ({ code }) => ({ code: formatCode(code) }),
        () => {
          if (textAreaNode && prePrettifySelectionEnd) {
            textAreaNode.selectionEnd = prePrettifySelectionEnd;
          }
        },
      );
    } catch (e) {
      console.error('Unable to prettify code', e);
    }
  };

  liveEditorOnKeyDown = (e: KeyboardEvent) => {
    // key codes for vs code
    const shouldPrettify = [
      /* windows: shift + alt + f */
      e.shiftKey && e.altKey && e.key === 'F',

      /* osx: shift + option + f */
      e.shiftKey && e.altKey && e.key === 'F',

      /* unix: shift + ctrl + i */
      e.shiftKey && e.ctrlKey && e.key === 'I',
    ].some(Boolean);

    if (shouldPrettify) {
      e.stopPropagation();
      e.preventDefault();
      this.prettifyCode({
        textAreaNode: e.target,
        prePrettifySelectionEnd: (e.target as HTMLTextAreaElement).selectionEnd,
      });
    }
  };

  onResetCode = () =>
    this.setState({
      code: formatCode(this.props.initialCode),
    });

  onCodeChange = (code: string) =>
    this.setState({ code }, () => this.props.onChange(this.state.code));

  onToggleRtl = (isRtl: boolean) => this.setState({ isRtl });
  onToggleBackground = (isDarkBackground: boolean) =>
    this.setState({ isDarkBackground });

  onToggleCode = () =>
    this.setState(state => ({
      isEditorOpened: !state.isEditorOpened,
    }));

  transformCode = (code = '') => {
    const { parseError } = this.state;
    let newParseError;
    let returnValue = code;

    try {
      returnValue = transformCode(code);
      newParseError = null;
    } catch (error) {
      newParseError = error.message;
    }

    if (newParseError !== parseError) {
      this.setState({ parseError: newParseError });
    }

    return returnValue;
  };

  previewWarning = () =>
    this.props.previewWarning({
      onConfirm: () => this.setState({ renderPreview: true }),
    });

  renderError = () => {
    if (this.state.renderPreview) {
      return this.state.parseError ? (
        <div className={styles.error}>{this.state.parseError}</div>
      ) : (
        <LiveError className={styles.error} />
      );
    }

    return null;
  };

  render() {
    const {
      scope,
      compact,
      previewRow,
      previewProps,
      autoRender,
      noBackground,
    } = this.props;

    const {
      code,
      isRtl,
      isDarkBackground,
      isEditorOpened,
      renderPreview,
    } = this.state;

    const dirty = this.state.initialFormattedCode !== this.state.code;

    return (
      <div
        className={classnames(styles.wrapper, {
          [styles.compact]: compact,
        })}
      >
        {!compact && (
          <div className={styles.header}>
            <CopyButton
              source={this.state.code}
              prefixIcon={<DuplicateSmall />}
            />

            <div className={styles.spacer} />

            {dirty && (
              <div className={styles.headerControl}>
                <TextButton
                  onClick={() => this.prettifyCode()}
                  prefixIcon={<MagicWandSmall />}
                >
                  Prettify
                </TextButton>
              </div>
            )}

            <div className={styles.headerControl}>
              Imitate RTL:&nbsp;
              <ToggleSwitch
                size="small"
                checked={isRtl}
                onChange={this.onToggleRtl}
              />
            </div>

            <div className={styles.headerControl}>
              Dark Background:&nbsp;
              <ToggleSwitch
                size="small"
                checked={isDarkBackground}
                onChange={this.onToggleBackground}
              />
            </div>

            {dirty && (
              <TextButton
                onClick={this.onResetCode}
                prefixIcon={<RevertSmall />}
              >
                Reset
              </TextButton>
            )}
          </div>
        )}

        <LiveProvider
          code={code.trim()}
          scope={{ isRtl, ...scope }}
          noInline={!autoRender}
          transformCode={this.transformCode}
        >
          <div className={styles.liveExampleWrapper}>
            <div
              className={classnames(styles.preview, previewProps.className, {
                rtl: isRtl,
                [styles.darkPreview]: isDarkBackground,
                [styles.compactPreview]: compact && !noBackground,
              })}
              dir={isRtl ? 'rtl' : ''}
            >
              {renderPreview ? (
                <LivePreview
                  {...previewProps}
                  className={previewRow ? styles.previewRow : null}
                />
              ) : (
                this.previewWarning()
              )}

              {this.renderError()}
            </div>

            <Collapse isOpened={isEditorOpened} className={styles.editor}>
              <LiveEditor
                onChange={this.debouncedOnCodeChange}
                className={styles.editorView}
                // @ts-ignore because LiveEditor spreads props onto `react-simple-code-editor` and it supports `highlight`
                highlight={safeTokenHighlighter}
                // @ts-ignore because LiveEditor spreads props onto `react-simple-code-editor` and it supports `onKeyDown`
                onKeyDown={this.liveEditorOnKeyDown}
              />
            </Collapse>
          </div>
        </LiveProvider>

        {compact && (
          <div className={styles.controlButtons}>
            <CopyButton
              source={this.state.code}
              prefixIcon={<DuplicateSmall />}
            />

            {dirty && (
              <TextButton
                onClick={() => this.prettifyCode()}
                prefixIcon={<MagicWandSmall />}
              >
                Prettify
              </TextButton>
            )}

            <div style={{ marginLeft: 'auto' }} />

            {dirty && (
              <TextButton
                onClick={this.onResetCode}
                prefixIcon={<RevertSmall />}
              >
                Reset
              </TextButton>
            )}

            <TextButton onClick={this.onToggleCode} prefixIcon={<CodeSmall />}>
              {this.state.isEditorOpened ? 'Hide' : 'Show'} code
            </TextButton>
          </div>
        )}
      </div>
    );
  }
}
