import {z} from 'zod';
import {_Identifier} from './identifier';
import {_MarkdownString} from './markdown-string';

export const schemaName = 'effect';

export default _Effect;

export const _Effect = z.object({
  id: _Identifier,
  name: z.string(),
  description: _MarkdownString,
});

export const _EffectReference = z.object({
  model: z.literal(schemaName),
});

export type Effect = z.infer<typeof _Effect>;
