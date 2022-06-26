import {z} from 'zod';
import {_EffectReference} from './effect';
import {_Identifier} from './identifier';

import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const schemaName = 'spell';

export default _Spell;

export const _Spell = z.object({
  id: _Identifier,
  name: z.string(),
  description: _MarkdownString,
  learning_requirements: _MarkdownString,
  activation_requirements: _MarkdownString.optional(),
  effects: z.array(z.intersection(_EffectReference, _Reference)),
});

export const _SpellReference = z.object({
  model: z.literal(schemaName),
});

export type Spell = z.infer<typeof _Spell>;
