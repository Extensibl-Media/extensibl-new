import { defineCollection } from "astro:content";
import { z } from "zod";

const servicesCollection = defineCollection({
  type: "data",
});

const testimonialsCollection = defineCollection({
  type: "data",
});

const blogsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.date(),
      category: z.string(),
      image: image(),
      imageAlt: z.string(),
    }),
});

const portfolioCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      exerpt: z.string(),
      techStack: z.array(z.string()),
      slug: z.string(),
      image: image(),
      category: z.union([
        z.literal("App Development"),
        z.literal("Web Design"),
        z.literal("Digital Marketing"),
        z.literal("Brand Design"),
        z.literal("SEO Services"),
        z.literal("UI/UX Design"),
      ]),
    }),
});

export const collections = {
  services: servicesCollection,
  articles: blogsCollection,
  portfolio: portfolioCollection,
  testimonials: testimonialsCollection,
};
