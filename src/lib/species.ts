import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface ISpecies {
  id: string;
  name: string;
  description: IMarkdownString;
  effects?: IReference[];
}
