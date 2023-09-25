import { getAllPost, getFeaturedPost } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturePosts() {
  const posts = await getFeaturedPost();
  return (
    <section className="mt-20 p-4">
      <h2 className="text-1xl font-bold">Feature Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
