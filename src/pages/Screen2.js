import React from 'react'
import './Screen2.css'
import {Link} from "react-router-dom";

const Screen2 = () => {
    return (
        <>
            <h2>Pantalla 2</h2>
            <button className='button'>
                <Link to='/sensores'>GESTIONAR SENSORES</Link>
            </button>
        </>
    )
}

export default Screen2;
