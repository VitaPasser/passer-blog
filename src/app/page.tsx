import { MiniaturePost } from './components/ArticleCard';
import Footer from './components/Footer';
import Header from './components/Header';
import BlogPosts from './components/BlogPosts';

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
    <div className='flex flex-col gap-y-5 font-inter '>
      <Header />
      <main className='px-8'>
        <BlogPosts posts={posts}>Recent blog posts</BlogPosts>
        <BlogPosts posts={posts2}>All blog posts</BlogPosts>
      </main>
      <Footer />
    </div>
  );
}
