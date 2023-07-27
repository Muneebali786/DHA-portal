import React from 'react';
import logo from '../images/logo.jpg';
import {FaPhoneAlt,
    FaEnvelope} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='topNavbar'>
            <div className='NavbarContainer'>
            {/* <img src= "logo.jpg" width = "100" height = "100"/>  */}
            <div className="Logo">
                <img className='logo' src={logo} />
            </div>
            <div className='topNavContent'>
                <div className='topNavInfo'>
                <i><FaPhoneAlt/></i>
                <p>(042) 111 342 547</p>
                </div>
                <div className='topNavInfo'>
                <i><FaEnvelope/></i>
                <p>customercare@dhalahore.org</p>
                </div>
                {/* <i><BiTime/></i> */}
            </div>
            </div>
        </div>
    );
};

export default Navbar;