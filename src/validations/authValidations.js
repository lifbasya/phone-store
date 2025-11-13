import z from "zod";

export const registerSchema = z.object({
  fullname: z.string().min(3, "Fullname must be at least 3 characters long"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .refine((s) => !s.includes(" "), {
      message: "Username must not contain spaces",
    }),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirm_password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["admin", "user"], "Role must be either 'admin' or 'user'"),
  address: z
    .string()
    .min(5, "Address must be at min 5 characters long")
    .optional(),
  phone_number: z
    .string()
    .regex(/^0\d{9,14}$/, "Invalid phone number")
    .optional(),
  age: z.number().min(10, "Age must be 10 ").max(100, "Age must be most 100").optional(),
})

.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirm_password"],
});