import React from 'react'
import Tag from '../Tag'
import Image from 'next/image';
import { TDate, TImage } from '../BlogPosts/Card/SpecialArticleCard'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import stylePost from './Post.module.css'

export type TPost = {
    title: string
    content: string
    tags: string[]
    publish_date: TDate
    cover: TImage
}

const Post = ({
    post,
    className
}: {
    post: TPost,
    className?: string
}
) => {
    const className_ = className ?? ''
    const { title, content, tags, publish_date, cover } = post
    return (
        <section className={'flex flex-col gap-6 ' + className_}>
            <div className='flex flex-col gap-8'>
                <p className='text-sm font-semibold text-purple-heart'>
                    {publish_date.dayweek}
                    <span className='date-to-dot'></span>
                    {publish_date.date}
                </p>
                <h2 className='flex flex-row justify-between font-semibold text-4xl items-center'>
                    <span>{title}</span>
                </h2>
                <Image
                    className='w-full max-h-96 object-cover'
                    src={cover.link}
                    width='1920'
                    height='1080'
                    alt={cover.alt}
                />
                <Markdown
                    remarkPlugins={[[remarkGfm], [remarkMath]]}
                    rehypePlugins={[[rehypeRaw], [rehypeKatex, { output: 'mathml' }]]}
                    className={'text-base font-normal text-pale-sky dark:text-ghost ' + stylePost.markdown}>
                    {content}
                </Markdown>
            </div>
            <div className='flex flex-row flex-wrap gap-2'>
                {tags.map((tag, key) => <Tag key={key} tag={tag} />)}
            </div>
        </section >
    )
}

export default Post