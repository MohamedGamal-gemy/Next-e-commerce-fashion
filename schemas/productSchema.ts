import { z } from "zod";

export const sizeSchema = z.object({
  _id: z.string().optional(),
  size: z.string().min(1),
  stock: z.number().min(0),
});

export const imageSchema = z.object({
  _id: z.string().optional(),
  url: z.string().url(),
});

export const variantSchema = z.object({
  _id: z.string().optional(),
  color: z.object({ name: z.string().min(1), value: z.string().min(1) }),
  images: z.array(imageSchema),
  sizes: z.array(sizeSchema),
});

export const editProductSchema = z.object({
  _id: z.string(),
  title: z.string().min(1),
  price: z.number().min(1),
  description: z.string().optional(),
  category: z.object({
    _id: z.string(),
    name: z.string(),
    __v: z.number().optional(),
  }),
  // category: z.string(), // ← ID
  // subcategory: z.string(),

  subcategory: z.object({
    _id: z.string(),
    name: z.string(),
    __v: z.number().optional(),
  }),

  // variants: z.array(variantSchema),
});

export type EditProductType = z.infer<typeof editProductSchema>;
