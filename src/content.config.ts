import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const CATEGORIES = {
  civic: "Civic tools",
  products: "Products",
  brands: "Brands",
  "open-source": "Open source",
  client: "Client work",
  publishing: "Publishing",
} as const;

export const STATUSES = ["live", "beta", "in-development"] as const;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    description: z.string(),
    categories: z.array(z.enum(Object.keys(CATEGORIES) as [keyof typeof CATEGORIES, ...(keyof typeof CATEGORIES)[]])).min(1),
    // Leave status out when it is unconfirmed: the card then shows no badge.
    status: z.enum(STATUSES).optional(),
    tags: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

export const collections = { projects };
