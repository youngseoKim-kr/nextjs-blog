import FilterablePosts from "@/component/FilterablePosts";
import { getAllPost } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All post",
  description: "Kys All post",
};

export default async function Post() {
  const posts = await getAllPost();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <section>
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
