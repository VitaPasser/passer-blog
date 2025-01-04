'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export type TTag = {
    title: string
}

const setRandomColors = (
    setColorBgTag: (value: string) => void,
    setColorTextTag: (value: string) => void
) => {
    const mapBgColor = new Map([
        [0, 'bg-red-50'],
        [1, 'bg-orange-50'],
        [2, 'bg-yellow-50'],
        [3, 'bg-green-50'],
        [4, 'bg-cyan-50'],
        [5, 'bg-purple-50'],
        [6, 'bg-rose-50'],
        [7, 'bg-indigo-50'],
        [8, 'bg-lime-50'],
        [9, 'bg-blue-50'],
    ])
    const mapTextColor = new Map([
        [0, 'text-red-700'],
        [1, 'text-orange-700'],
        [2, 'text-yellow-700'],
        [3, 'text-green-700'],
        [4, 'text-cyan-700'],
        [5, 'text-purple-700'],
        [6, 'text-rose-700'],
        [7, 'text-indigo-700'],
        [8, 'text-lime-700'],
        [9, 'text-blue-700'],
    ])
    const idColor = Math.floor(Math.random() * 10)
    setColorBgTag(mapBgColor.get(idColor) || 'bg-slate-50');
    setColorTextTag(mapTextColor.get(idColor) || 'text-slate-700');
}

const Tag = ({
    tag: { title }
}: {
    tag: TTag
}) => {

    const [colorBgTag, setColorBgTag] = useState<string>('slate-50');
    const [colorTextTag, setColorTextTag] = useState<string>('slate-50');

    useEffect(() => {
        setRandomColors(setColorBgTag, setColorTextTag)
    }, [])

    return (
        <Link
            href={"/tags/" + title}
            className={`rounded-full px-[10px] py-[2px] ${colorBgTag} ${colorTextTag} text-sm font-medium`}
            replace
        > {title}</Link>
    )
}

export default Tag