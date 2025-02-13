import { defineCollection, z } from "astro:content";

const recipesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      difficulty: z.number(),
      servings: z.number(),
    }),
});

export const collections = {
  recipes: recipesCollection,
};
