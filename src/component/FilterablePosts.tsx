"use client";

import { Post } from "@/service/posts";
import { useState } from "react";
import PostCard from "./PostCard";
import Categories from "./Categories";
import PostsGrid from "./PostsGrid";
import PostSearch from "./PostSearch";

type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  const filterPost = (title: string): void => {
    console.log(title);
  };
  return (
    <section className="mx-6">
      <PostSearch filterPost={filterPost} />
      <div className="flex">
        <PostsGrid posts={filtered} />
        <Categories
          categories={categories}
          selected={selected}
          onClick={setSelected}
        />
      </div>
    </section>
  );
}
