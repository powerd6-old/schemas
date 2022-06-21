import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface IFocus {
  id: string;
  name: string;
  description: IMarkdownString;
  attribute: IReference;
}
