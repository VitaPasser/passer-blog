import BlogPosts from '@/components/BlogPosts/BlogPosts'
import TitleChapter from '@/components/TitleChapter'
import React, { Suspense } from 'react'
import Main from '@/components/Main'
import Pagination from '@/components/Pagination'
import { MiniaturePost } from '@/components/BlogPosts/Card/SpecialArticleCard'
import { IPagination } from '@/app/page'


const Posts = async ({
    params
}: {
    params: {
        page: string[] | undefined
    }
}) => {
    const pageNumber = Number(((await params).page || ['1'])[0]);
    const data_ = await fetch(`http://${process.env.URL_SERVER}/api/posts/miniatures/${pageNumber}?count_elements_page=12`, {
        method: "GET",
      });
    const { data, pagination }: { data: MiniaturePost[], pagination: IPagination } = await data_.json();
    const posts = data;

    return (
        <>
            <TitleChapter>the blog</TitleChapter>
            <Main>
                <Suspense>
                    <BlogPosts
                        className='py-[30px] xl:py-[10px]'
                        posts={posts}>
                        All blog posts
                    </BlogPosts>
                    <Pagination url='/posts/' currentPage={pagination.current_page} totalPages={pagination.total_pages} />
                </Suspense>
            </Main>
        </>
    )
}

export default Posts