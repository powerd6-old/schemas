import {z} from 'zod';

/** A Markdown string */
export const MarkdownString = z.string().min(1);
