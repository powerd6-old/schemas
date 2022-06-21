import {ISchemaModel} from '../schema-model';
import {IMarkdownString} from './markdown-string';

export interface IEffect extends ISchemaModel {
  name: string;
  description: IMarkdownString;
}
