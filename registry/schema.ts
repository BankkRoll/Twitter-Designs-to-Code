import { z } from "zod";

export const fileSchema = z.object({
  path: z.string(),
  content: z.string(),
  type: z.literal("registry:ui"),
  target: z.string().optional(),
});

export const uiSchema = z.object({
  name: z.string(),
  type: z.literal("registry:ui"),
  dependencies: z.array(z.string()).optional(),
  files: z.array(fileSchema),
});

export const registrySchema = z.array(uiSchema);

export type Registry = z.infer<typeof registrySchema>;
