import React, { ReactNode } from 'react'


const TitleChapter = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <h1 className='uppercase text-center text-7xl font-bold border-y border-black-34 dark:border-white leading-[1.1806] md:leading-[1.1381] md:text-[160.8px] xl:text-[243.8px] xl:leading-[1.20188]'>
            {children}
        </h1>
    )
}

export default TitleChapter