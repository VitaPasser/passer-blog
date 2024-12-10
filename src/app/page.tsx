import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-boom bg-no-repeat bg-center bg-cover flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-8xl font-bold text-stroke">Under Construction</h1>
      <Image
        className='animate-spin mt-36'
        src="/passer.png"
        alt='Passer move to around'
        width={600}
        height={600} />
    </div>
  );
}
