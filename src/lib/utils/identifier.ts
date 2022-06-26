import {z} from 'zod';

/** The unique identifier for this object */
export const Identifier = z.string().min(1).trim();
