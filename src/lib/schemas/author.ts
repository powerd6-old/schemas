import {z} from 'zod';

import {_MarkdownString} from './markdown-string';

export const _Author = z.object({
  id: z.string(),
  name: z.string(),
  biography: _MarkdownString.optional(),
});

export type Author = z.infer<typeof _Author>;
