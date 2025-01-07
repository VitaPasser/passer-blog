import BlogPosts from '@/components/BlogPosts/BlogPosts'
import TitleChapter from '@/components/TitleChapter'
import React, { Suspense } from 'react'
import Main from '@/components/Main'
import Pagination from '@/components/Pagination'
import { MiniaturePost } from '@/components/BlogPosts/Card/SpecialArticleCard'
import { IPagination } from '@/app/page'
import ErrorList, { IErrorMessage } from '@/components/ErrorList'

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
    const { data, pagination, errors_messages }: { data: MiniaturePost[], pagination: IPagination, errors_messages?: IErrorMessage[] } = await data_.json();
    const errors_messages_ = errors_messages ?? [];
    console.log(errors_messages);
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
                    <ErrorList errors={errors_messages_} />
                    <Pagination url='/posts/' currentPage={pagination.current_page} totalPages={pagination.total_pages} />
                </Suspense>
            </Main>
        </>
    )
}

export default Posts