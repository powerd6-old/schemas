import {z} from 'zod';
import {_EffectReference} from './effect';
import {_Identifier} from './identifier';

import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const schemaName = 'injury';

export default _Injury;

export const _Injury = z.object({
  id: _Identifier,
  name: z.string(),
  description: _MarkdownString,
  effects: z.array(z.intersection(_EffectReference, _Reference)).optional(),
});

export const _InjuryReference = z.object({
  model: z.literal(schemaName),
});

export type Injury = z.infer<typeof _Injury>;
