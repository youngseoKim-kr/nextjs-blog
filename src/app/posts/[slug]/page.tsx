import MarkdownViewer from "@/component/MarkdownViewer";
import { getPostData } from "@/service/posts";
import Image from "next/image";
import { AiFillCalendar } from "react-icons/ai";

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
  const { title, description, date, path, content } = await getPostData(slug);

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-6">
      <Image
        className="w-full h-1/6 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <AiFillCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
