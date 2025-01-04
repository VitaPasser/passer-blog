import { MiniaturePost } from "@/components/BlogPosts/Card/SpecialArticleCard";

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
};

export default async function getPostsMiniature() {
  const data = await fetch(`http://${process.env.URL_SERVER}/api/posts`, {
    method: "GET",
  });
  const postsFetch: PostFetch[] = await data.json();
  const posts = postsFetch.map((post) => {
    const date = new Date(post.created_at);
    const result: MiniaturePost = {
      title: post.title,
      description: post.description,
      tags: post.tags.map((tag) => tag.title),
      publish_date: {
        dayweek: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
          date
        ),
        date: new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(date),
      },
      image: {
        link: `http://${process.env.URL_SERVER}/${post.link_to_cover}`,
        alt: post.alt_cover,
      },
      link_to_post: "/post/" + post.id,
    };
    return result;
  });
  return posts;
}
