import z from "zod";

export const createProductSchema = z.object({
  user_id: z.number().min(1, "User ID must be a positive number"),
  name: z.string().min(3, "Product name must be at least 3 characters long"),
  description: z
    .string()
    .max(500, "Description must be at most 500 characters long"),
  price: z.number().min(0, "Price must be a positive number"),
  stock: z.number().min(0, "Stock must be a positive number"),
});

export const updateProductSchema = z.object({
  user_id: z.number().min(1, "User ID must be a positive number").optional(),
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters long")
    .optional(),
  description: z
    .string()
    .max(500, "Description must be at most 500 characters long")
    .optional(),
  price: z.number().min(0, "Price must be a positive number").optional(),
  stock: z.number().min(0, "Stock must be a positive number").optional(),
});
