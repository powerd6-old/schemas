/**
 * Focus
 *
 * @module
 */
import {z} from 'zod';
import {AttributeReference} from './attribute';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {ReferenceForType} from '../utils/reference';
import {Name} from '../utils/name';

const name = 'focus';

export const Focus = SchemaObject(name).extend({
  name: Name,
  /**
   * The description of how a focus specializes the related attribute.
   */
  description: MarkdownString,
  /**
   * A [[Reference]] to the [[Attribute]] that contains this focus.
   */
  attribute: AttributeReference,
});

/**
 * A [[Reference]] to a [[Focus]].
 */
export const FocusReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Focus extends z.TypeOf<typeof Focus> {}
