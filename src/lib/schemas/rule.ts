import {z} from 'zod';
import {_Identifier} from './identifier';
import {_MarkdownString} from './markdown-string';

export const schemaName = 'rule';

export default _Rule;

export const _Rule = z.object({
  id: _Identifier,
  name: z.string(),
  description: _MarkdownString,
});

export const _RuleReference = z.object({
  model: z.literal(schemaName),
});

export type Rule = z.infer<typeof _Rule>;
