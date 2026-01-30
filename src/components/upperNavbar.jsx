import React from 'react'
import logo from './../../public/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub , faFacebook } from '@fortawesome/free-brands-svg-icons';


const upperNavbar = () => {
    return (
        <div>
            {/* <img src={logo} alt="" / */}
            <h1 className='lg:hidden block'>Menu</h1>
            <ul className="lg:flex  h-20  items-center text-xl font-semibold font-mono text-red-800 lg:flex-row flex-col hidden ">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>

             <h1>Welcome! <FontAwesomeIcon icon={faFacebook} /></h1>
        </div>
    )
}

export default upperNavbar
