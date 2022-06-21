import {IMarkdownString} from './markdown-string';

export interface IRule {
  id: string;
  name: string;
  description: IMarkdownString;
}
