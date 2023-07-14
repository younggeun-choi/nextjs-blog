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
  prevPost: Post | null;
  nextPost: Post | null;
};

export const getAllPosts = async (): Promise<Post[]> => {
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

// data 폴더의 posts.json 파일을 읽어와 featured 가 false 인 Post 타입의 배열을 반환하는 비동기 함수
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) {
    throw new Error(`No such file: ${fileName}`);
  }

  const index = posts.indexOf(post);
  const nextPost = index > 0 ? posts[index - 1] : null;
  const prevPost = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf8");

  return { ...post, content, prevPost, nextPost };
}
