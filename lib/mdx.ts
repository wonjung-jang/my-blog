import { PostMeta } from "@/types/post";
import fs from "fs";
import path from "path";

const appDirectory = path.join(process.cwd(), "app");

export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const categoryPath = path.join(appDirectory, category);

  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const entries = fs.readdirSync(categoryPath, { withFileTypes: true });

  const posts: PostMeta[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith("_")) {
      const mdxPath = path.join(categoryPath, entry.name, "page.mdx");

      if (fs.existsSync(mdxPath)) {
        try {
          const mod = await import(`@/app/${category}/${entry.name}/page.mdx`);

          if (mod.metadata) {
            posts.push({
              slug: entry.name,
              title: mod.metadata.title,
              date: mod.metadata.date,
              description: mod.metadata.description,
              type: mod.metadata.type,
              categories: mod.metadata.categories,
            });
          }
        } catch (e) {
          console.error(`Failed to load metadata from ${mdxPath}:`, e);
        }
      }
    }
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
