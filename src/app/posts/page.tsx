'use client'
import BlogPosts from '@/components/BlogPosts/BlogPosts'
import { MiniaturePost } from '@/components/BlogPosts/Card/SpecialArticleCard'
import Pagination from '@/components/Pagination'
import { validatePageNumber } from '@/utils/validate'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Posts = () => {
    const page = useSearchParams().get("page")
    const pageNumber = validatePageNumber(page)
    const posts: MiniaturePost[] = Array(6).fill(
        {
            title: 'UX review presentations',
            description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            tags: ['Design', 'Research', 'Presentation', 'UX', 'UI', 'Value'],
            publish_date: {
                dayweek: 'Sunday',
                date: '1 Jan 2023',
            },
            image:
            {
                link: '/posts/1.png',
                alt: 'Two tables, chairs and a human walk fast to the side.'
            },
            link_to_post: '/',
        }
    );
    return (
        <div>
            <BlogPosts
                className='py-[30px] xl:py-[10px]'
                posts={posts}>
                All blog posts
            </BlogPosts>
            <Pagination currentPage={pageNumber} totalPages={10} />
        </div>
    )
}

export default Posts