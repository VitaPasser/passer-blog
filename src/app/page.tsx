import { MiniaturePost } from '../components/BlogPosts/Card/SpecialArticleCard';
import RecentBlogPosts from '../components/BlogPosts/RecentBlogPosts';
import BlogPosts from '../components/BlogPosts/BlogPosts';
import Pagination from '../components/Pagination';
import Link from 'next/link';
import TitleChapter from '@/components/TitleChapter';
import Main from '@/components/Main';

export default function Home() {
  const posts: MiniaturePost[] = Array(4).fill(
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
  const posts2 = Array(6).fill(posts[0]);
  return (
    <>
      <TitleChapter>the blog</TitleChapter>
      <Main>
        <RecentBlogPosts posts={posts}>Recent blog posts</RecentBlogPosts>
        <BlogPosts className='py-[30px]' posts={posts2}>
          <Link href='/post'>All blog posts</Link>
        </BlogPosts>
        <Pagination currentPage={1} totalPages={10} />
      </Main>
    </>
  );
}
