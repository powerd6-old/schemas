/**
 * Item
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {ReferenceForType} from '../utils/reference';
import {EffectReference} from './effect';

const name = 'item';

export const Item = SchemaObject(name).extend({
  name: z.string(),
  description: MarkdownString,
  effects: z.array(EffectReference),
});

/**
 * A [[Reference]] to an [[Item]].
 */
export const ItemReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Item extends z.TypeOf<typeof Item> {}
