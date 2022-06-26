import {z} from 'zod';
import {_EffectReference} from './effect';
import {_Identifier} from './identifier';

import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const schemaName = 'item';

export default _Item;

export const _Item = z.object({
  id: _Identifier,
  name: z.string(),
  description: _MarkdownString,
  effects: z.array(z.intersection(_EffectReference, _Reference)),
});

export const _ItemReference = z.object({
  model: z.literal(schemaName),
});

export type Item = z.infer<typeof _Item>;
