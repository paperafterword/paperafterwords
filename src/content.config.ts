import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    translator: z.string().optional(),
    publisher: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    images: z.object({
      bookCover: z.string().optional(),
      origami: z.string().optional(),
    }),
  }),
});

export const collections = {
  blog,
};
