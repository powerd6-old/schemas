import {IMarkdownString} from './markdown-string';

export interface IAuthor {
  id: string;
  name: string;
  biography?: IMarkdownString;
}
