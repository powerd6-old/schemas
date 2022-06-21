import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface IAttribute {
  id: string;
  name: string;
  associated_number: number;
  abbreviation: string;
  description: IMarkdownString;
  focuses: [IReference, IReference];
}
