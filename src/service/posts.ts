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

// data 폴더의 posts.json 파일을 읽어와 Post 타입의 배열을 반환하는 비동기 함수
export const getAllPosts = async (): Promise<Post[]> => {
  //   const res = await fetch("/data/posts.json");
  //   const posts: Post[] = await res.json();
  //   return posts;
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return (
    readFile(filePath, "utf8")
      // .then<Post[]>((data) => JSON.parse(data))
      .then<Post[]>(JSON.parse)

      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1))) // 포스팅 시간이 최신순으로 정렬
  );
};

// data 폴더의 posts.json 파일을 읽어와 featured 가 true 인 Post 타입의 배열을 반환하는 비동기 함수
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}
