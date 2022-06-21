import {ISchemaModel} from '../schema-model';
import {IMarkdownString} from './markdown-string';

export interface IRule extends ISchemaModel {
  name: string;
  description: IMarkdownString;
}
