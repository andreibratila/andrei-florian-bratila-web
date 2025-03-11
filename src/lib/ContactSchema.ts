import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name max 50 characters'),
  email: z.string().email('Wrong email').max(100, 'Email max 100 characters'),
  subject: z
    .string()
    .min(1, 'Subject is required')
    .max(50, 'Subject max 50 characters'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(2000, 'Message max 2000 characters'),
});

export type ContactShemaI = z.infer<typeof ContactSchema>;
