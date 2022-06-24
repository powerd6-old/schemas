import {z} from 'zod';
import {_AttributeReference} from './attribute';
import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';

export const _Focus = z.object({
  id: z.string(),
  name: z.string(),
  description: _MarkdownString,
  attribute: z.intersection(_AttributeReference, _Reference),
});

export const _FocusReference = z.object({
  model: z.literal('focus'),
});

export type Focus = z.infer<typeof _Focus>;
