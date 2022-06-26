import {z} from 'zod';
import {_FocusReference} from './focus';
import {_Identifier} from './identifier';
import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const schemaName = 'attribute';

export default _Attribute;

export const _Attribute = z.object({
  id: _Identifier,
  name: z.string(),
  associated_number: z.number().int().gte(1).lte(6),
  abbreviation: z.string().trim().length(3),
  description: _MarkdownString,
  focuses: z.array(z.intersection(_FocusReference, _Reference)).length(2),
});

export const _AttributeReference = z.object({
  model: z.literal(schemaName),
});

export type Attribute = z.infer<typeof _Attribute>;

