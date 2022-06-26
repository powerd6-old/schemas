/**
 * Rule
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {Name} from '../utils/name';
import {ReferenceForType} from '../utils/reference';

const name = 'rule';

export const Rule = SchemaObject(name).extend({
  name: Name,
  /**
   * A description of the rule, with all the
   * necessary details to use them during play.
   */
  description: MarkdownString,
});

/**
 * A [[Reference]] to a [[Rule]].
 */
export const RuleReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Rule extends z.TypeOf<typeof Rule> {}
