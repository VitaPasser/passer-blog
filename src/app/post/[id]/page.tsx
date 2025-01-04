import React from 'react'
import Post_, { TPost } from '@/components/Post/Post'
import RecentBlogPosts2 from '@/components/BlogPosts/RecentBlogPosts2'
import { MiniaturePost } from '@/components/BlogPosts/Card/SpecialArticleCard'
import getPostsMiniature, { PostFetch } from '@/utils/getPostsMiniature'

const Post = async (
        {
        params,
    }: {
        params: { id: string }
        }
) => {
    const data = await fetch(`http://${process.env.URL_SERVER}/api/posts/${Number(await(params).id) || 1}`, {
        method: "GET",
    });
    const postsFetch: PostFetch = await data.json();
    const date = new Date(postsFetch.created_at);
    const post: TPost = {
        title: postsFetch.title,
        content: postsFetch.content,
        tags: postsFetch.tags.map((tag) => tag.title),
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
        cover: {
            link: `http://${process.env.URL_SERVER}/${postsFetch.link_to_cover}`,
            alt: postsFetch.alt_cover,
        }
    }
    const allPosts = (await getPostsMiniature());
    const lastIndex = (allPosts.length - 1);
    const countRecentBlocks = 12
    const randRecentPostIndexEnd = Math.random() * (lastIndex - countRecentBlocks) + countRecentBlocks;
    const recentPosts: MiniaturePost[] = allPosts.slice(randRecentPostIndexEnd - countRecentBlocks, randRecentPostIndexEnd);

    return (
        <div className='flex flex-col md:flex-row group gap-x-8 xl:px-8'>
            <Post_ className='' post={post} />
            <RecentBlogPosts2 className='md:order-first xl:max-w-[342px]' posts={recentPosts}>Recent blog posts</RecentBlogPosts2>
        </div>
    )
}

export default Post