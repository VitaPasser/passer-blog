import React from 'react'
import Menu from './Menu/Menu';


type Props = {
    name?: string
}

const Navbar = ({ name }: Props) => {
    return (
        <div className='flex justify-between items-center p-5'>
            <p className='font-semibold text-lg leading-6'>{name || 'Your Name'}</p>
            <Menu />
        </div>
    )
}

export default Navbar