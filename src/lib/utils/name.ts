import {z} from 'zod';

/** The human-readable name */
export const Name = z.string().min(1).trim();
