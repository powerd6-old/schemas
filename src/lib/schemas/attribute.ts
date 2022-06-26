/**
 * Attribute
 *
 * @module
 */
import {z} from 'zod';
import {FocusReference} from './focus';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {ReferenceForType} from '../utils/reference';
import {Name} from '../utils/name';

const name = 'attribute';

export const Attribute = SchemaObject(name).extend({
  name: Name,
  /**
   * The associated number of this attribute.
   *
   * Must be between 1 and 6.
   */
  associated_number: z.number().int().gte(1).lte(6),
  /**
   * The three-letter abbreviation of this attribute's name.
   */
  abbreviation: z.string().trim().length(3),
  description: MarkdownString,
  /**
   * The two focuses that relate to this attribute.
   *
   * This is a [[Reference]], rather than a [[Focus]].
   */
  focuses: z.array(FocusReference).length(2),
});

/**
 * A [[Reference]] to an [[Attribute]].
 */
export const AttributeReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Attribute extends z.TypeOf<typeof Attribute> {}
