import * as z from 'zod';

export const registerSchema = z
  .object({
    username: z.string().min(1, { message: 'Username is required' }),
    email: z.string().email({ message: 'Please enter a emai format' }),
    password: z
      .string()
      .regex(new RegExp('^(?=[A-Za-z0-9]*[A-Za-z])(?=[A-Za-z0-9]*d)[A-Za-z0-9]{9,}$'), {
        message: 'Password not strong',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z.string().email({ message: 'Enter your Email' }),
  password: z.string().min(1, { message: 'Enter your password' }),
});
