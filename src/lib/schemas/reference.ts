import {z} from 'zod';

export const _Reference = z.object({
  model: z.string().trim(),
  id: z.string().trim(),
});

export type ReferenceType = z.infer<typeof _Reference>;
