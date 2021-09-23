import React from 'react'
import './Header.css'

import iconFace from '../assets/img/iconFace.png'
import iconInsta from '../assets/img/iconInsta.png'

const Header = () => {
    return (
        <header className="header">
            <div className="loginConta"> Minha Conta </div>
            <div className="promotion"><span>Frete Gratis para região | 5%OFF - Boleto </span></div>
            <div className="social">
                <img className="iconFace" src={iconFace} alt="Face"/>
                <img className="iconInsta" src={iconInsta} alt="Insta" />
            </div>
        </header> 
    )
}

export default Header
