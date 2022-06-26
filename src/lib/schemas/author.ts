import {z} from 'zod';
import {_Identifier} from './identifier';

import {_MarkdownString} from './markdown-string';

export const schemaName = 'author';

export default _Author;

export const _Author = z.object({
  id: _Identifier,
  name: z.string(),
  biography: _MarkdownString.optional(),
});

export type Author = z.infer<typeof _Author>;
