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

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturedPost(): Promise<Post[]> {
  return getAllPost().then((post) => post.filter((post) => post.featured));
}

export async function getNonFeaturedPost(): Promise<Post[]> {
  return getAllPost().then((post) => post.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(
    process.cwd(),
    `/public/data/posts`,
    `${fileName}.md`
  );
  const posts = await getAllPost();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}

export async function getAllPost(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "/public/data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((post) => post.sort((a, b) => (a.date > b.date ? 1 : -1)));
}
