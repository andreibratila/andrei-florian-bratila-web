import zod from 'zod';

const envSchema = zod.object({
  NEXT_PUBLIC_LINKEDIN_URL: zod.string().url(),
  NEXT_PUBLIC_GITHUB_URL: zod.string().url(),
  NEXT_PUBLIC_X_URL: zod.string().url(),
  NEXT_PUBLIC_EMAIL: zod.string().email(),
  NEXT_PUBLIC_PHONE: zod.string().refine((val) => !val || !isNaN(Number(val)), {
    message: 'NEXT_PUBLIC_PHONE debe ser un número válido',
  }),
  NEXT_PUBLIC_BASE_URL: zod.string().url(),
  EMAIL_PASS: zod.string().min(1),
});
export const validateEnv = () => envSchema.safeParse(process.env);
