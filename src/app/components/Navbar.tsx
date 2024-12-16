import React from 'react'
import { IoMenuOutline } from "react-icons/io5";


type Props = {
    name?: string
}

const Navbar = ({ name }: Props) => {
    return (
        <div className='flex justify-between items-center p-5'>
            <p className='inter font-semibold text-lg leading-6'>{name || 'Your Name'}</p>
            <button><IoMenuOutline className='w-8 h-8' /></button>
        </div>
    )
}

export default Navbar