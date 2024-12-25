'use client'
import { IoCloseOutline } from "react-icons/io5";
import React, { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import MenuLink from './MenuLink'
import TurnDarkMode from "./TurnDarkMode";


type Props = {
    name?: string
    className?: string
}

const Menu = ({ name, className }: Props) => {
    const className_ = className ?? ''
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={className_}>
            {isOpen ?
                <div className='h-screen w-screen z-40 fixed inset-0'>
                    <aside className='h-screen w-screen z-50 bg-white dark:bg-cod-gray flex flex-col items-center'>
                        <div className='flex flex-col items-center gap-y-[54px] justify-center content-center justify-items-center h-screen'>
                            <p className='font-semibold text-lg leading-6 dark:text-white'>
                                {name || 'Your Name'}
                            </p>
                            <section className='flex flex-col items-center gap-y-[20px]'>
                                <MenuLink
                                    onClick={() => setIsOpen(false)}
                                    href='/posts'
                                >
                                    Blog
                                </MenuLink>
                                <MenuLink
                                    onClick={() => setIsOpen(false)}
                                    href='/projects'
                                >
                                    Projects
                                </MenuLink>
                                <MenuLink
                                    onClick={() => setIsOpen(false)}
                                    href='/about'
                                >
                                    About
                                </MenuLink>
                                <MenuLink
                                    onClick={() => setIsOpen(false)}
                                    href='/news'
                                >
                                    Newsletter
                                </MenuLink>
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
        </div>
    )
}

export default Menu