import React from 'react'
import Logo from './../../public/logo.jpeg'

const upperNavbar = () => {
    return (
        <div>
            <ul className="flex gap-5 justify-center h-16 bg-gray-400 items-center text-white">
                <img src={Logo} alt="" className='w-14 rounded-full' />
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default upperNavbar
