import {ISchemaModel} from '../schema-model';
import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface IFocus extends ISchemaModel {
  name: string;
  description: IMarkdownString;
  attribute: IReference;
}
