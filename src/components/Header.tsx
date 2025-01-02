import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 xl:pt-[30px] xl:pb-0 xl:px-0'>
      <Link href='/'>
        <p className='font-semibold text-lg leading-6'>Passer Blog</p>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header