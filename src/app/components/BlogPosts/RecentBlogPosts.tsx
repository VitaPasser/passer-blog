import React, { ReactNode } from 'react'
import SpecialArticleCard, { MiniaturePost } from './SpecialArticleCard'

type Props = {
    posts: MiniaturePost[]
    children: ReactNode
}

const RecentBlogPosts = ({ posts, children }: Props) => {
    return (
        <section className='flex flex-col gap-y-8 py-[30px] group'>
            <h2 className='font-semibold text-2xl'>{children}</h2>
            <div className='flex flex-col gap-y-8'>
                {
                    posts.map((post, key) => {
                        return (
                            <SpecialArticleCard
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

export default RecentBlogPosts