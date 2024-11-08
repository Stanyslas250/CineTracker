import * as z from 'zod';
import { loginSchema, registerSchema } from '@/schemas/AuthSchemas';

export type RegisterData = z.infer<typeof registerSchema>;

export type LoginData = z.infer<typeof loginSchema>;
