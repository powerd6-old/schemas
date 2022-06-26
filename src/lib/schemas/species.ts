/**
 * Species
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {Name} from '../utils/name';
import {ReferenceForType} from '../utils/reference';
import {EffectReference} from './effect';

const name = 'species';

export const Species = SchemaObject(name).extend({
  name: Name,
  /**
   * A generic description of what the species is, how they came to be,
   * how they behave and any other characteristic that they possess.
   */
  description: MarkdownString,
  /**
   * A description of the appearance of a species
   */
  appearance: MarkdownString,
  /**
   * A list of all the effects that this species gives to a character.
   *
   * This is a [[Reference]], rather than an [[Effect]].
   */
  effects: z.array(EffectReference),
});

/**
 * A [[Reference]] to a [[Species]].
 */
export const SpeciesReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Species extends z.TypeOf<typeof Species> {}
