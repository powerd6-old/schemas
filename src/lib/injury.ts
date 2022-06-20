import {MarkdownString} from './markdown-string';
import {Reference} from './reference';

export interface Injury {
  id: string;
  name: string;
  description: MarkdownString;
  effects?: Reference[];
}
