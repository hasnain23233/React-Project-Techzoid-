import React from 'react'
import logo from './../../public/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub , faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router";


const upperNavbar = () => {
    return (
        <div>
            <ul className="flex items-center justify-between w-5/12 m-auto py-6 bg-gray-200 px-4 rounded-full mt-2">
                <li>
                    <NavLink to={'/'} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} end>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/service'}>Services</NavLink>
                </li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default upperNavbar
