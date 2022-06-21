import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface ISpell {
  id: string;
  name: string;
  description: IMarkdownString;
  learning_requirements: IMarkdownString;
  activation_requirements?: IMarkdownString;
  effects: IReference[];
}
