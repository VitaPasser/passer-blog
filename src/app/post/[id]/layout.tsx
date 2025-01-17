import Main from '@/components/Main'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Main>{children}</Main>
    )
}

export default Layout