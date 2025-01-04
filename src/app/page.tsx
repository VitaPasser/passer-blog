import RecentBlogPosts from '../components/BlogPosts/RecentBlogPosts';
import BlogPosts from '../components/BlogPosts/BlogPosts';
import Pagination from '../components/Pagination';
import Link from 'next/link';
import TitleChapter from '@/components/TitleChapter';
import Main from '@/components/Main';
import getPost from '@/utils/getPostsMiniature';

export default async function Home() {
  const allPosts = await getPost();
  const numberOfPosts = 6;
  const maxPages = Math.ceil(allPosts.length / numberOfPosts);
  const lastIndex = (allPosts.length - 1);
  const countRecentBlocks = 4
  const randRecentPostIndexEnd = Math.random() * (lastIndex - countRecentBlocks) + countRecentBlocks;
  const recentPosts = allPosts.slice(randRecentPostIndexEnd - countRecentBlocks, randRecentPostIndexEnd);
  const otherPosts = allPosts
    .toSorted((a, b) => new Date(b.publish_date.date).getTime() - new Date(a.publish_date.date).getTime())
    .slice(0, numberOfPosts);

  return (
    <>
      <TitleChapter>the blog</TitleChapter>
      <Main>
        <RecentBlogPosts posts={recentPosts}>Recent blog posts</RecentBlogPosts>
        <BlogPosts className='py-[30px]' posts={otherPosts}>
          <Link href='/post'>All blog posts</Link>
        </BlogPosts>
        <Pagination url='/posts/' currentPage={1} totalPages={maxPages} />
      </Main>
    </>
  );
}
