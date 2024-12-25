import React from 'react'
import Menu from './Menu/Menu';
import TurnDarkMode from './Menu/TurnDarkMode';
import MenuLink from './Menu/MenuLink';


type Props = {
    name?: string
}

const Navbar = ({ name }: Props) => {
    return (
        <div className='flex justify-between items-center p-5 xl:pt-[30px] xl:pb-0 xl:px-0'>
            <p className='font-semibold text-lg leading-6'>{name || 'Your Name'}</p>
            <Menu className='md:hidden' />
            <section className='hidden md:flex gap-[14px]'>
                <MenuLink href='/post'>Blog</MenuLink>
                <MenuLink href='/projects'>Projects</MenuLink>
                <MenuLink href='/about'>About</MenuLink>
                <MenuLink href='/newsletter'>Newsletter</MenuLink>
                <TurnDarkMode />
            </section>
        </div>
    )
}

export default Navbar