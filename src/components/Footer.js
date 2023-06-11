import React from 'react'
import logo from './images/image.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <img src= {logo} alt='logo'></img>
            </div>
        </div>
    )
}

export default Footer
