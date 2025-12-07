import { getPostsByCategory } from "@/lib/mdx";
import PostList from "../_components/PostList";

export default async function DevPage() {
  const posts = await getPostsByCategory("dev");

  return (
    <div className="w-full pt-32 px-8 pb-8">
      <PostList posts={posts} basePath="/dev" />
    </div>
  );
}
