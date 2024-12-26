import React from 'react'
import Menu from './Menu/Menu';
import TurnDarkMode from './Menu/TurnDarkMode';
import MenuLink from './Menu/MenuLink';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-5 xl:pt-[30px] xl:pb-0 xl:px-0'>
            <Link href='/'>
                <p className='font-semibold text-lg leading-6'>Vita Passer</p>
            </Link>
            <Menu className='md:hidden' />
            <section className='hidden md:flex gap-[14px]'>
                <MenuLink href='/posts'>Blog</MenuLink>
                <MenuLink href='/projects'>Projects</MenuLink>
                <MenuLink href='/about'>About</MenuLink>
                <MenuLink href='/newsletter'>Newsletter</MenuLink>
                <TurnDarkMode />
            </section>
        </div>
    )
}

export default Navbar