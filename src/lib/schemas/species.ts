import {z} from 'zod';
import {_EffectReference} from './effect';
import {_Identifier} from './identifier';

import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const schemaName = 'species';

export default _Species;

export const _Species = z.object({
  id: _Identifier,
  name: z.string(),
  description: _MarkdownString,
  effects: z.array(z.intersection(_EffectReference, _Reference)),
});

export const _SpeciesReference = z.object({
  model: z.literal(schemaName),
});

export type Species = z.infer<typeof _Species>;
