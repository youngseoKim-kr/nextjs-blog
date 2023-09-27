import { getAllPost, getFeaturedPost } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturePosts() {
  const posts = await getFeaturedPost();
  return (
    <section className="m-6">
      <h2 className="text-2xl font-bold my-2">Feature Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
