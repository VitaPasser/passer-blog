import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <Navbar />
      <Link href='/'>
        <h1 className='uppercase text-center text-7xl font-bold border-y border-black-34 dark:border-white leading-[1.1806] md:leading-[1.2009] md:text-[160.8px]'>the blog</h1>
      </Link>
    </>
  )
}

export default Header