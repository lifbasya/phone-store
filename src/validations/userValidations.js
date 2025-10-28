import z from "zod";

export const createUserSchema = z.object({
  fullname: z.string().min(3, "Full name must be at least 3 characters long"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .refine((s) => !s.includes(" "), "Username must not contain spaces"),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["user", "admin"], "role must be 'admin' or 'user'"),
});

export const updateUserSchema = z.object({
  fullname: z
    .string()
    .min(3, "Full name must be at least 3 characters long")
    .optional(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .refine((s) => !s.includes(" "), "Username must not contain spaces")
    .optional(),
  email: z.email("Invalid email address").optional(),
  role: z.enum(["user", "admin"], "role harus 'admin' atau 'user'").optional(),
  address: z
    .string()
    .max(255, "Address must be at most 255 characters long")
    .optional(),
  phone_number: z
    .string()
    .max(15, "Phone number must be at most 15 characters long")
    .optional(),
  age: z.number().min(0, "Age must be a positive number").optional(),
});
