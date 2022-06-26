import {z} from 'zod';
import {Identifier} from './identifier';

/** A reference to an object of a certain type and a specific id value. */
export const Reference = z.object({
  type: z.string().trim(),
  id: Identifier,
});

/**
 * Create a reference for a specific object of a chosen type.
 * @param type The `type` that this reference should relate to
 * @returns A Reference
 */
export function ReferenceForType(type: string) {
  return Reference.extend({
    type: z.literal(type),
    id: Identifier,
  });
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Reference extends z.TypeOf<typeof Reference> {}
