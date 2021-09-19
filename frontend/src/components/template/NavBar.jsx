import React from 'react'
import './NavBar.css'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../assets/img/logo.png'

const NavBar = () => {
    return (
        <nav className="menu">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

                Menu + Search

            <div className="button">
                <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeConten={2} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>

        </nav>
    )
}

export default NavBar
