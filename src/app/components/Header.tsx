import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <Navbar />
      <Link href='/'>
        <h1 className='uppercase text-center text-7xl font-bold border-y border-black-34 leading-[1.1806]'>the blog</h1>
      </Link>
    </>
  )
}

export default Header