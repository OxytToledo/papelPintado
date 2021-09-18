import React from 'react'
import './NavBar.css'

import logo from '../assets/img/logo.png'

const NavBar = () => {
    return (
        <nav className="menu">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

                Menu + Search

            <div className="login">
                Image pushing to login
            </div>

        </nav>
    )
}

export default NavBar
