import React, { ReactNode } from 'react'


const NameChapter = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <h1 className='uppercase text-center text-5xl font-bold border-y border-black-34 dark:border-white leading-[1.1806] md:leading-[1.4009] md:text-[110px]'>
            {children}
        </h1>
    )
}

export default NameChapter