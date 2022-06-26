/**
 * Effect
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {Name} from '../utils/name';
import {ReferenceForType} from '../utils/reference';

const name = 'effect';

/**
 * Effects are similar to rules, but they have a more narrative meaning.
 */
export const Effect = SchemaObject(name).extend({
  name: Name,
  /**
   * A description of the effect, as well as how to apply it.
   */
  description: MarkdownString,
});

/**
 * A [[Reference]] to an [[Effect]].
 */
export const EffectReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Effect extends z.TypeOf<typeof Effect> {}
