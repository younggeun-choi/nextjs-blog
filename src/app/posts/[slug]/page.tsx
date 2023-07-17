import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/posts";
import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return { title, description };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, prevPost, nextPost } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
        alt={title}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prevPost && <AdjacentPostCard post={prevPost} type="prev" />}
        {nextPost && <AdjacentPostCard post={nextPost} type="next" />}
      </section>
    </article>
  );
}
