import { getPostData } from "@/service/posts";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

//동적인 metadata
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  //서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  const post = await getPostData(slug);

  if (!post) {
    redirect("/posts");
    // NotFoundPage();
  }
  return (
    <>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </>
  );
}
