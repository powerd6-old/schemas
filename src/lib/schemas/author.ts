/**
 * Author
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {ReferenceForType} from '../utils/reference';

const name = 'author';

export const Author = SchemaObject(name).extend({
  /**
   * The name of the author, or how they want to be credited as.
   */
  name: z.string(),
  /**
   * An optional biography that should accompany this author's introduction.
   */
  biography: MarkdownString.optional(),
});

/**
 * A [[Reference]] to an [[Author]].
 */
export const AuthorReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Author extends z.TypeOf<typeof Author> {}
