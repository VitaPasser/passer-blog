import { MiniaturePost} from "@/components/BlogPosts/Card/SpecialArticleCard";
import { IErrorMessage } from "@/components/ErrorList";

export type TagFetch = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
};

export type PostFetch = {
  id: number;
  title: string;
  content: string;
  description: string;
  link_to_cover: string;
  alt_cover: string;
  created_at: string;
  updated_at: string;
  tags: TagFetch[];
} | {
  errors_messages: IErrorMessage[]
};

export default async function getPostsMiniature() {
  const data = await fetch(`http://${process.env.URL_SERVER}/api/posts/miniatures`, {
    method: "GET",
  });
  const posts: MiniaturePost[] = await data.json();
  return posts;
}
