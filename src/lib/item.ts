import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface IItem {
  id: string;
  name: string;
  description: IMarkdownString;
  effects?: IReference[];
}
