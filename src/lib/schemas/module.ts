/**
 * Module
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {ReferenceForType} from '../utils/reference';
import {Author} from './author';

const name = 'module';

export const Module = SchemaObject(name).extend({
  name: z.string(),
  description: MarkdownString,
  authors: z.array(Author),
  /** A map of content. The keys are the content `type` and the entries should be all contents with that type. */
  content: z.map(z.string().min(1), z.array(z.any())),
});

export const ModuleReference = ReferenceForType(name);
