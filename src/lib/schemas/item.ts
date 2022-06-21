import {ISchemaModel} from '../schema-model';
import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface IItem extends ISchemaModel {
  name: string;
  description: IMarkdownString;
  effects?: IReference[];
}
