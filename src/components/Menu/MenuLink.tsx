import React, { ReactNode } from 'react'
import Link from 'next/link';


const MenuLink = ({
  href,
  children
}: {
  href: string
  children: ReactNode
}) => {
  return (
    <Link
      className='font-normal text-lg leading-6 p-2 dark:text-white'
      href={href}
    >{children}</Link>
  )
}

export default MenuLink