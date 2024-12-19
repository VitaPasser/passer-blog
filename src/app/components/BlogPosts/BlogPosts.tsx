import React, { ReactNode } from 'react'
import { MiniaturePost } from './SpecialArticleCard'
import ArticleCard from './ArticleCard'

type Props = {
    posts: MiniaturePost[]
    children: ReactNode
}

const BlogPosts = ({ posts, children }: Props) => {
    return (
        <section className='flex flex-col gap-y-8 py-[30px] group'>
            <h2 className='font-semibold text-2xl'>{children}</h2>
            <div className='flex gap-y-6 gap-x-4 flex-wrap'>
                {
                    posts.map((post, key) => {
                        return (
                            <ArticleCard
                                key={key}
                                title={post.title}
                                description={post.description}
                                tags={post.tags}
                                publish_date={post.publish_date}
                                image={post.image}
                                link_to_post={post.link_to_post}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default BlogPosts