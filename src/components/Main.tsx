import React from 'react'

const Main = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main className='px-8 xl:px-0'>{children}</main>
    )
}

export default Main