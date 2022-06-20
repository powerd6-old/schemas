import {MarkdownString} from './markdown-string';
import {Reference} from './reference';

export interface Focus {
  id: string;
  name: string;
  description: MarkdownString;
  attribute: Reference;
}
