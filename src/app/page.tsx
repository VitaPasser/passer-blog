import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div className='flex flex-col gap-y-5'>
      <Header />
      <Footer />
    </div>
  );
}
