import React, { ReactNode } from 'react'
import SpecialArticleCard, { MiniaturePost } from './Card/SpecialArticleCard'
import RightSpecialArticleCard from './Card/RightSpecialArticleCard'

type Props = {
    posts: MiniaturePost[]
    className?: string
    children: ReactNode
}

const RecentBlogPosts = ({ posts, children, className }: Props) => {
    const classname_ = className ?? ''
    const posts2 = posts.slice(1, 3)
    return (
        <section className={'flex flex-col gap-y-8 py-[30px] xl:pt-[10px] xl:pb-[30px] group' + classname_}>
            <h2 className='font-semibold text-2xl'>{children}</h2>
            <div className='flex flex-col xl:flex-row xl:flex-wrap gap-y-8 xl:gap-x-8 xl:gap-y-[30px]'>
                {
                    posts.map((post, key) => {
                        if (key === 1) {
                            return (
                                <div key={key} className='flex flex-col xl:flex-wrap gap-y-8 xl:gap-x-8 xl:gap-y-[30px] basis-[calc(50%-16px)]'>
                                    {
                                        posts2.map((post1, key1) => {
                                            return (
                                                <RightSpecialArticleCard
                                                    key={key1}
                                                    title={post1.title}
                                                    description={post1.description}
                                                    tags={post1.tags}
                                                    publish_date={post1.publish_date}
                                                    image={post1.image}
                                                    link_to_post={post1.link_to_post}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            )
                        } else if (key !== 2) {
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
                        }
                    })
                }
            </div>
        </section>
    )
}

export default RecentBlogPosts