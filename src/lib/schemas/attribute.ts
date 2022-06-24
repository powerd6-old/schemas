import {z} from 'zod';
import {_FocusReference} from './focus';
import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const _Attribute = z.object({
  id: z.string(),
  name: z.string(),
  associated_number: z.number().int().gte(1).lte(6),
  abbreviation: z.string().trim().length(3),
  description: _MarkdownString,
  focuses: z.array(z.intersection(_FocusReference, _Reference)).length(2),
});

export const _AttributeReference = z.object({
  model: z.literal('attribute'),
});

export type Attribute = z.infer<typeof _Attribute>;
