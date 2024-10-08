import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subscribers: z.string(),
    imageUrl: z.string(),
    category: z.enum(['featured', 'trending', 'more', 'for_you']),
    publishDate: z.date(),
  }),
});

export const collections = {
  'articles': articleCollection,
};