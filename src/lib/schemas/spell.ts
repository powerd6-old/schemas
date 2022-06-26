/**
 * Spell
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {Name} from '../utils/name';
import {ReferenceForType} from '../utils/reference';
import {EffectReference} from './effect';

const name = 'spell';

export const Spell = SchemaObject(name).extend({
  name: Name,
  /**
   * The description of how the spell looks and behaves.
   */
  description: MarkdownString,
  /**
   * A paragraph explaining what conditions must be achieved
   * for this spell to be available for learning.
   */
  learning_requirements: MarkdownString,
  /**
   * A paragraph explaining what conditions must be met so
   * this spell can be activated.
   */
  activation_requirements: MarkdownString.optional(),
  /**
   * A list of all the effects that this spell causes when activated.
   *
   * This is a [[Reference]], rather than an [[Effect]].
   */
  effects: z.array(EffectReference),
});

/**
 * A [[Reference]] to a [[Spell]].
 */
export const SpellReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Spell extends z.TypeOf<typeof Spell> {}
