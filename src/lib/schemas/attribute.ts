import {ISchemaModel} from '../schema-model';
import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface IAttribute extends ISchemaModel {
  id: string;
  name: string;
  associated_number: number;
  abbreviation: string;
  description: IMarkdownString;
  focuses: [IReference, IReference];
}
