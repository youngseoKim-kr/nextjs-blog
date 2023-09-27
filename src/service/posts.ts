import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedPost(): Promise<Post[]> {
  return getAllPost().then((post) => post.filter((post) => post.featured));
}

export async function getNonFeaturedPost(): Promise<Post[]> {
  return getAllPost().then((post) => post.filter((post) => !post.featured));
}

export async function getAllPost(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "/public/data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((post) => post.sort((a, b) => (a.date > b.date ? 1 : -1)));
}
