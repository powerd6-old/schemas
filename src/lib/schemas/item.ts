import {z} from 'zod';
import {_EffectReference} from './effect';

import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const _Item = z.object({
  id: z.string(),
  name: z.string(),
  description: _MarkdownString,
  effects: z.array(z.intersection(_EffectReference, _Reference)),
});

export const _ItemReference = z.object({
  model: z.literal('item'),
});

export type Item = z.infer<typeof _Item>;
