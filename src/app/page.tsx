import RecentBlogPosts from '../components/BlogPosts/RecentBlogPosts';
import BlogPosts from '../components/BlogPosts/BlogPosts';
import Pagination from '../components/Pagination';
import Link from 'next/link';
import TitleChapter from '@/components/TitleChapter';
import Main from '@/components/Main';
import getPost from '@/utils/getPostsMiniature';
import { MiniaturePost } from '@/components/BlogPosts/Card/SpecialArticleCard';

export interface IPagination {
  total: number,
  count: number,
  per_page: number,
  current_page: number,
  total_pages: number,
}

export default async function Home() {
  const data_ = await fetch(`http://${process.env.URL_SERVER}/api/posts/miniatures/1?count_elements_page=6&count_elements_page_for_next_pagination=12`, {
    method: "GET",
  });
  const { data, pagination }: { data: MiniaturePost[], pagination: IPagination } = await data_.json();
  const otherPosts = data;
  console.log(data);
  const allPosts = await getPost();
  const lastIndex = (allPosts.length - 1);
  const countRecentBlocks = 4
  const randRecentPostIndexEnd = Math.random() * (lastIndex - countRecentBlocks) + countRecentBlocks;
  const recentPosts = allPosts.slice(randRecentPostIndexEnd - countRecentBlocks, randRecentPostIndexEnd);

  return (
    <>
      <TitleChapter>the blog</TitleChapter>
      <Main>
        <RecentBlogPosts posts={recentPosts}>Recent blog posts</RecentBlogPosts>
        <BlogPosts className='py-[30px]' posts={otherPosts}>
          <Link href='/post'>All blog posts</Link>
        </BlogPosts>
        <Pagination url='/posts/' currentPage={pagination.current_page} totalPages={pagination.total_pages} />
      </Main>
    </>
  );
}
