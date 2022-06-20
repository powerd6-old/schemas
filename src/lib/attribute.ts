import {MarkdownString} from './markdown-string';
import {Reference} from './reference';

export interface Attribute {
  id: string;
  name: string;
  associated_number: number;
  abbreviation: string;
  description: MarkdownString;
  focuses: [Reference, Reference];
}
