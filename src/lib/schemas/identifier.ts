import {z} from 'zod';

export const schemaName = 'identifier';

export default _Identifier;

export const _Identifier = z.string().min(1).trim();
