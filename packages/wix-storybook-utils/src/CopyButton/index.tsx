import * as React from 'react';
import copy from 'copy-to-clipboard';

import TextButton from '../TextButton';

interface Props {
  source: string;
  prefixIcon?: React.ReactNode;
  className?: string;
}

interface State {
  notification: boolean;
}

export class CopyButton extends React.Component<Props, State> {
  timeout = null;

  constructor(props) {
    super(props);

    this.state = {
      notification: false,
    };
  }

  onCopy = () => {
    if (!this.state.notification) {
      copy(this.props.source);

      this.setState({ notification: true }, () => {
        this.timeout = setTimeout(
          () => this.setState({ notification: false }),
          3000,
        );
      });
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <TextButton
        className={this.props.className}
        onClick={this.onCopy}
        prefixIcon={this.props.prefixIcon}
      >
        {this.state.notification ? 'Copied to clipboard!' : 'Copy'}
      </TextButton>
    );
  }
}
