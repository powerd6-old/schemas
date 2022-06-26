import {z} from 'zod';
import {_Author} from './author';
import {_Identifier} from './identifier';
import {_MarkdownString} from './markdown-string';

export const schemaName = 'module';

export default _Module;

export const _Module = z.object({
  id: _Identifier,
  name: z.string(),
  description: _MarkdownString,
  authors: z.array(_Author),
  models: z.map(z.string().min(1), z.string().min(1).url()),
  content: z.map(z.string(), z.array(z.any())),
});

export type Module = z.infer<typeof _Module>;
