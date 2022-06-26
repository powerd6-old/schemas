import {z} from 'zod';
import {_Identifier} from './identifier';

export const schemaName = 'reference';

export default _Reference;

export const _Reference = z.object({
  model: z.string().trim(),
  id: _Identifier,
});

export type ReferenceType = z.infer<typeof _Reference>;
