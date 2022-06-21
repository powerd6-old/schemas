import {ISchemaModel} from '../schema-model';
import {ISchemaModel} from '../schema-model';
import {IMarkdownString} from './markdown-string';

export interface IAuthor extends ISchemaModel {
  name: string;
  biography?: IMarkdownString;
}
