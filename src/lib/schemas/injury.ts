import {z} from 'zod';
import {_EffectReference} from './effect';

import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const _Injury = z.object({
  id: z.string(),
  name: z.string(),
  description: _MarkdownString,
  effects: z.array(z.intersection(_EffectReference, _Reference)).optional(),
});

export const _InjuryReference = z.object({
  model: z.literal('injury'),
});

export type Injury = z.infer<typeof _Injury>;
