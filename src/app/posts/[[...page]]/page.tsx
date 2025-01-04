import BlogPosts from '@/components/BlogPosts/BlogPosts'
import TitleChapter from '@/components/TitleChapter'
import React, { Suspense } from 'react'
import Main from '@/components/Main'
import getPostsMiniature from '@/utils/getPostsMiniature'
import Pagination from '@/components/Pagination'


const Posts = async ({
    params
}: {
    params: {
        page: string[] | undefined
    }
}) => {
    const pageNumber = Number(((await params).page || ['1'])[0]);
    const numberOfPosts = 12;
    const allPosts = (await getPostsMiniature());
    const posts = allPosts
        .toSorted((a, b) => new Date(b.publish_date.date).getTime() - new Date(a.publish_date.date).getTime())
        .slice(numberOfPosts * (pageNumber - 1), numberOfPosts * pageNumber);
    const maxPages = Math.ceil(allPosts.length / numberOfPosts);

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
                    <Pagination url='/posts/' currentPage={pageNumber} totalPages={maxPages} />
                </Suspense>
            </Main>
        </>
    )
}

export default Posts