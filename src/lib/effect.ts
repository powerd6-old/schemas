import {IMarkdownString} from './markdown-string';

export interface IEffect {
  id: string;
  name: string;
  description: IMarkdownString;
}
