import { getPostsByCategory } from "@/lib/mdx";
import PostList from "../_components/PostList";

export default async function DailyPage() {
  const posts = await getPostsByCategory("daily");

  return (
    <div className="w-full pt-32 px-8 pb-8">
      <PostList posts={posts} basePath="/daily" />
    </div>
  );
}
