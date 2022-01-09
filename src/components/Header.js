import React from 'react'
import './Header.css'
import logo from '../images/toon.jpg';





export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt='log' className="nav--icon" />
            <h3 className="nav--logo_text"><a href='https://opensea.io/collection/toon-punk'>ToonPunks</a></h3>
            <h4 className="nav--title"><a href='https://opensea.io/collection/toon-punk'>Opensea</a></h4>
        </nav>
    )
}
