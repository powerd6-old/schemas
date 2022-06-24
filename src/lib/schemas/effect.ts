import {z} from 'zod';
import {_MarkdownString} from './markdown-string';

export const _Effect = z.object({
  id: z.string(),
  name: z.string(),
  description: _MarkdownString,
});

export const _EffectReference = z.object({
  model: z.literal('effect'),
});

export type Effect = z.infer<typeof _Effect>;
