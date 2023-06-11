import React from 'react'
import './Canvas.css'
import canva1 from './images/canva1.png'
import canva2 from './images/canva2.png'
import canva3 from './images/canva3.png'

const Canvas = () => {
    return (
        <div className='canvas' id='canvas'>
            <h1>CONOCE MÁS SOBRE LA CONTAMINACIÓN EN EL AIRE</h1>
            <div className='contaminantes'>
                <div className='title'>
                    <h2 className='h2-left-align'>Contaminantes criterio</h2>
                </div>
            </div>

            <div className='container-canvas'>
                <div className='col-1'>
                    <div className='canva-1'>
                        <img src={canva1} alt='canva1'></img>
                        <div className='canva-3'>
                            <img src={canva3} alt='canva3'></img>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='canva-2'>
                        <img src={canva2} alt='canva2'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Canvas
