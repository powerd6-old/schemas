import {z} from 'zod';

export const _MarkdownString = z.string().min(1);

export type MarkdownString = z.infer<typeof _MarkdownString>;
