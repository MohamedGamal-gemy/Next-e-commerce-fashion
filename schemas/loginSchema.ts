import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(5, "Email is too short")
    .max(100)
    .email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
