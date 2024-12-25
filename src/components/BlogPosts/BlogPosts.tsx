import React, { ReactNode } from 'react'
import { MiniaturePost } from './Card/SpecialArticleCard'
import ArticleCard from './Card/ArticleCard'

type Props = {
    posts: MiniaturePost[]
    className?: string
    children: ReactNode
}

const BlogPosts = ({ posts, children, className }: Props) => {
    const classname_ = className ?? ''
    return (
        <section className={'flex flex-col gap-y-8 group ' + classname_}>
            <h2 className='font-semibold text-2xl'>{children}</h2>
            <div className='flex gap-y-6 gap-x-4 flex-wrap xl:gap-x-8 xl:gap-y-12'>
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