import { MiniaturePost } from './components/BlogPosts/SpecialArticleCard';
import Footer from './components/Footer';
import Header from './components/Header';
import RecentBlogPosts from './components/BlogPosts/RecentBlogPosts';
import BlogPosts from './components/BlogPosts/BlogPosts';
import Pagination from './components/Pagination';
import Image from 'next/image';

export default function Home() {
  const posts: MiniaturePost[] = Array(4).fill(
    {
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      tags: ['Design', 'Research', 'Presentation', 'UX', 'UI', 'Value'],
      publish_date: 'Sunday , 1 Jan 2023',
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
    <div className='flex flex-col gap-y-5 md:gap-y-[30px] xl:gap-y-[50px] font-inter dark:bg-haiti dark:text-white xl:px-28'>
      <Header />
      <main className='px-8 xl:px-0'>
        <RecentBlogPosts posts={posts}>Recent blog posts</RecentBlogPosts>
        <BlogPosts posts={posts2}>All blog posts</BlogPosts>
        <Pagination currentPage={5} totalPages={10} />
      </main>
      <Footer />
      <div className='flex flex-wrap '>
        <Image className='basis-2/4 h-[400px]'
          src='/boom.png' width='400' height='400' alt='some' />
        <Image className='basis-1/4  h-[200px]'
          src='/boom.png' width='400' height='400' alt='some' />
        <Image className='basis-1/4  h-[200px]'
          src='/boom.png' width='400' height='400' alt='some' />
        <Image className='basis-full'
          src='/boom.png' width='400' height='400' alt='some' />
      </div>
    </div>
  );
}
