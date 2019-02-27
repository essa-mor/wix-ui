import React from 'react';

export enum SectionType {
  Header = 'header',
  Description = 'description',
  LiveCode = 'code',
  Code = 'code',
  ImportExample = 'importExample',
  Error = 'error',
  Tab = 'tab',
  Api = 'api',
  Playground = 'playground',
  Testkit = 'testkit',
  Columns = 'columns',
  Table = 'table',
  Tabs = 'tabs',
  MDX = 'mdx',
  Divider = 'divider',
  Title = 'title',
}

export interface StorySection {
  type: SectionType;
  pretitle?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
}

export type Section =
  | HeaderSection
  | DescriptionSection
  | ImportExampleSection
  | LiveCodeSection
  | CodeSection
  | TabSection
  | ApiSection
  | ColumnsSection
  | TableSection
  | TabsSection
  | MDXSection
  | TitleSection;

export interface DescriptionSection extends StorySection {
  text: React.ReactNode | string;
}

export interface HeaderSection extends StorySection {
  storyName: string;
  component?: React.ReactNode;
  issueUrl?: string;
  sourceUrl?: string;
}

export interface ImportExampleSection extends StorySection {
  source: React.ReactNode;
}

export interface CodeSection extends StorySection {
  source: React.ReactNode;
  previewProps?: object;
  components?: { [s: string]: React.ReactNode };
  compact?: boolean;
  interactive?: boolean;
}

export interface LiveCodeSection extends CodeSection {
  autoRender: boolean
}

export interface TabSection extends StorySection {
  sections: Section[];
}

export interface ErrorSection extends StorySection {}

export interface ApiSection extends StorySection {
  parsedSource?: object;
}
export interface PlaygroundSection extends StorySection {}
export interface TestkitSection extends StorySection {}

export interface ColumnsSection extends StorySection {
  items: Section[];
}

export interface TabsSection extends StorySection {
  tabs: TabSection[];
}

type Cell = string | React.ReactNode;
type Row = Cell[];
export interface TableSection extends StorySection {
  rows: Row[];
}

export interface MDXSection extends StorySection {
  content: any;
}

export interface DividerSection extends StorySection {}

export interface TitleSection extends StorySection {}

export interface SectionsMeta {
  tabs: string[];
}
