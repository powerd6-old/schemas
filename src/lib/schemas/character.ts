import {ISchemaModel} from '../schema-model';
import {IMarkdownString} from './markdown-string';
import {IReference} from './reference';

export interface ICharacter extends ISchemaModel {
  name: string;
  character_points: {
    available?: number;
    total?: number;
    [k: string]: unknown;
  };
  description: IMarkdownString;
  backstory?: IMarkdownString;
  species: IReference;
  attribute_values: IReference[];
  acquired_focuses: IReference[];
  health_capacity: IReference[];
  inventory: IReference[];
  known_spells: IReference[];
  effects: IReference[];
}
