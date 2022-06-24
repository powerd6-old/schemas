import {z} from 'zod';
import {_EffectReference} from './effect';

import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const _Spell = z.object({
  id: z.string(),
  name: z.string(),
  description: _MarkdownString,
  learning_requirements: _MarkdownString,
  activation_requirements: _MarkdownString.optional(),
  effects: z.array(z.intersection(_EffectReference, _Reference)),
});

export const _SpellReference = z.object({
  model: z.literal('spell'),
});

export type Spell = z.infer<typeof _Spell>;
