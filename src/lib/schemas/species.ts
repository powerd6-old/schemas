import {z} from 'zod';
import {_EffectReference} from './effect';

import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const _Species = z.object({
  id: z.string(),
  name: z.string(),
  description: _MarkdownString,
  effects: z.array(z.intersection(_EffectReference, _Reference)),
});

export const _SpeciesReference = z.object({
  model: z.literal('species'),
});

export type Species = z.infer<typeof _Species>;
