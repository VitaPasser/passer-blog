'use client'
import React, { useState } from 'react'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

const TurnDarkMode = () => {
    const [isDark, setIsDark] = useState(false)

    return (
        <button
            className="flex flex-raw gap-4 text-2xl py-2 px-4 bg-cod-gray rounded-full dark:bg-white"
            onClick={() => {
                setIsDark(!isDark);
                document.body.classList.toggle("dark");
            }}
        >
            <IoSunnyOutline
                className="text-white rounded-full dark:bg-cod-gray dark:text-cod-gray"
            />
            <IoMoonOutline
                className="text-white bg-white rounded-full dark:text-black"
            />
        </button>
    )
}

export default TurnDarkMode