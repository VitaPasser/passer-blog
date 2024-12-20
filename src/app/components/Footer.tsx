import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex flex-col items-center gap-y-[30px] py-[30px] text-xl leading-6 font-normal md:flex-row md:pl-8 md:gap-x-[14px]'>
            <div className='flex flex-col items-center gap-y-[14px] md:flex-row md:gap-x-[14px]'>
                <Link href="https://x.com/">Twitter</Link>
                <Link href="https://www.linkedin.com/feed/">LinkedIn</Link>
                <Link href="mailto::(">Email</Link>
                <Link href="/:(">RSS feed</Link>
                <Link href="/:(">Add to Feedly</Link>
            </div>
            <p className='md:order-first'>&copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer