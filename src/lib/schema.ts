import {z} from 'zod';
import {Identifier} from './utils/identifier';

/**
 * Create a schema object with a specific type.
 *
 * Usage:
 * ```typescript
 * // Creating a new Test schema object with custom properties
 * export const Test = SchemaObject('test').extend({
 *  name: z.string(),
 *  pass: z.boolean(),
 * });
 * ```
 * @param type The type of the schema to be created
 * @returns A Schema Object
 */
export function SchemaObject(type: string) {
  return z.object({
    /** Every schema object has information regarding it's type stored within */
    type: z.literal(type),
    id: Identifier,
  });
}
