/**
 * Injury
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {ReferenceForType} from '../utils/reference';
import {EffectReference} from './effect';

const name = 'injury';

export const Injury = SchemaObject(name).extend({
  name: z.string(),
  description: MarkdownString,
  effects: z.array(EffectReference),
});

/**
 * A [[ Reference ]] to an [[ Injury ]].
 */
export const InjuryReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Injury extends z.TypeOf<typeof Injury> {}
