import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/image.png'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'rgb(255, 255, 255)' }} />)
                        : (<FaBars size={30} style={{ color: 'rgb(255, 255, 255)' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>INICIO</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>GRÁFICAS</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#chart' onClick={closeMenu}>SOBRE NOSOTROS</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#canvas' onClick={closeMenu}>MÁS INFORMACIÓN</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
