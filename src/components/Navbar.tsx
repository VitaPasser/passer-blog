import React from 'react'
import Menu from './Menu/Menu';
import TurnDarkMode from './Menu/TurnDarkMode';
import MenuLink from './Menu/MenuLink';

const Navbar = () => {
    return (
        <>
            <Menu className='md:hidden' />
            <nav className='hidden md:flex gap-[14px]'>
                <MenuLink href='/posts'>Blog</MenuLink>
                <MenuLink href='/projects'>Projects</MenuLink>
                <MenuLink href='/about'>About</MenuLink>
                <MenuLink href='/newsletter'>Newsletter</MenuLink>
                <TurnDarkMode />
            </nav>
        </>
    )
}

export default Navbar