import fs from "fs";
import path from "path";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

const appDirectory = path.join(process.cwd(), "app");

export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const categoryPath = path.join(appDirectory, category);

  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const entries = fs.readdirSync(categoryPath, { withFileTypes: true });

  const posts: PostMeta[] = [];

  for (const entry of entries) {
    // 폴더이고 _로 시작하지 않는 경우만 (Next.js 컨벤션)
    if (entry.isDirectory() && !entry.name.startsWith("_")) {
      const mdxPath = path.join(categoryPath, entry.name, "page.mdx");

      if (fs.existsSync(mdxPath)) {
        try {
          // 동적으로 MDX 모듈의 postMeta를 가져옴
          const mod = await import(`@/app/${category}/${entry.name}/page.mdx`);

          if (mod.metadata) {
            posts.push({
              slug: entry.name,
              title: mod.metadata.title,
              date: mod.metadata.date,
              description: mod.metadata.description,
            });
          }
        } catch (e) {
          console.error(`Failed to load metadata from ${mdxPath}:`, e);
        }
      }
    }
  }

  // 날짜 기준 내림차순 정렬
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
