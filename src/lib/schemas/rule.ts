import {z} from 'zod';
import {_MarkdownString} from './markdown-string';

export const _Rule = z.object({
  id: z.string(),
  name: z.string(),
  description: _MarkdownString,
});

export const _RuleReference = z.object({
  model: z.literal('rule'),
});

export type Rule = z.infer<typeof _Rule>;
