'use client'
import { IoCloseOutline } from "react-icons/io5";
import React, { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import MenuLink from './MenuLink'
import TurnDarkMode from "./TurnDarkMode";


type Props = {
    name?: string
}

const Menu = ({ name }: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isOpen ?
                <div className='h-screen w-screen z-40 fixed inset-0'>
                    <aside className='h-screen w-screen z-50 bg-white dark:bg-cod-gray flex flex-col items-center'>
                        <div className='flex flex-col items-center gap-y-[54px] justify-center content-center justify-items-center h-screen'>
                            <p className='font-semibold text-lg leading-6 dark:text-white'>
                                {name || 'Your Name'}
                            </p>
                            <section className='flex flex-col items-center gap-y-[20px]'>
                                <MenuLink href='/blog'>Blog</MenuLink>
                                <MenuLink href='/projects'>Projects</MenuLink>
                                <MenuLink href='/about'>About</MenuLink>
                                <MenuLink href='/news'>Newsletter</MenuLink>
                                <TurnDarkMode />
                            </section>
                        </div>
                        <button
                            className="py-[20px]"
                            onClick={() => setIsOpen(false)}>
                            <IoCloseOutline
                                className='w-8 h-8 dark:text-white' />
                        </button>
                    </aside>
                </div >
                :
                <button onClick={() => setIsOpen(true)}>
                    <IoMenuOutline className='w-8 h-8' />
                </button>
            }
        </>
    )
}

export default Menu