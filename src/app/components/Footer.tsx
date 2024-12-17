import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex flex-col items-center gap-y-[30px] py-[30px] text-xl leading-6 font-normal'>
            <div className='flex flex-col items-center gap-y-[14px]'>
                <Link href="/">Twitter</Link>
                <Link href="/">LinkedIn</Link>
                <Link href="/">Email</Link>
                <Link href="/">RSS feed</Link>
                <Link href="/">Add to Feedly</Link>
            </div>
            <p>&copy; { new Date().getFullYear() }</p>
        </footer>
    )
}

export default Footer