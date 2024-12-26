import React from 'react'
import Tag from '../Tag'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import stylePost from './Post.module.css'

export type TDate = {
    dayweek: string
    date: string
}

export type TPost = {
    title: string
    content: string
    tags: string[]
    publish_date: TDate
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
    const { title, content, tags, publish_date } = post
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
                <Markdown
                    remarkPlugins={[[remarkGfm], [remarkMath]]}
                    rehypePlugins={[[rehypeRaw], [rehypeKatex, { output: 'mathml' }]]}
                    className={'text-base font-normal text-pale-sky ' + stylePost.markdown}>
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