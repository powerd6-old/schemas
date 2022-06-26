import {z} from 'zod';

export const schemaName = 'markdownString';

export default _MarkdownString;

export const _MarkdownString = z.string().min(1);

export type MarkdownString = z.infer<typeof _MarkdownString>;
