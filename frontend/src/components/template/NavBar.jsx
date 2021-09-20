import React from 'react'
import './NavBar.css'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../assets/img/logo.png'

const NavBar = ({ totalItems }) => {
    return (
        <nav className="menu">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="markName">
                <span className="markName">Papel</span>
                <span className="markSubname">Pintado</span>
            </div>
            
            <div class="container-fluid">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            <div className="button">
                <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeConten={totalItems} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>

        </nav>
    )
}

export default NavBar
