import {ISchemaModel} from '../schema-model';
import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface ISpell extends ISchemaModel {
  name: string;
  description: IMarkdownString;
  learning_requirements: IMarkdownString;
  activation_requirements?: IMarkdownString;
  effects: IReference[];
}
