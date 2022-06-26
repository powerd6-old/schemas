import {z} from 'zod';
import {_AttributeReference} from './attribute';
import {_Identifier} from './identifier';
import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const schemaName = 'focus';

export default _Focus;

export const _Focus = z.object({
  id: _Identifier,
  name: z.string(),
  description: _MarkdownString,
  attribute: z.intersection(_AttributeReference, _Reference),
});

export const _FocusReference = z.object({
  model: z.literal(schemaName),
});

export type Focus = z.infer<typeof _Focus>;
