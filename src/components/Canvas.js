import React from 'react'
import './Canvas.css'
import canva1 from './images/canva1.png'
import canva2 from './images/canva2.png'
import canva3 from './images/canva3.png'
import pm from './images/pm_item.jpg'
import no from './images/no_item.jpg'
import o from './images/o_item.jpg'
import so from './images/so_item.jpg'

const Canvas = () => {
    return (
        <div className='canvas' id='canvas'>
            <h1>CONOCE MÁS SOBRE LA CONTAMINACIÓN EN EL AIRE</h1>
            <div className='contaminantes'>
                <div className='title'>
                    <h2 className='h2-left-align'>Contaminantes criterio</h2>
                </div>

                <div className='card'>
                    <div className='face front'>
                        <img src={pm} alt='pm' />
                        <h3>PM 10 PM 2.5</h3>
                    </div>
                    <div className='face back'>
                        <h3>Partículas suspendidas</h3>
                        <p><b>Efectos en la salud:</b> Muerte prematura en personas con enfermedades cardíacas o pulmonares, infartos de miocardio
                            no mortales, latidos irregulares, asma agravada, función pulmonar reducida, síntomas
                            respiratorios aumentados, como irritación en las vías respiratorias, tos o dificultad
                            para respirar.</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='face front'>
                        <img src={so} alt='so' />
                        <h3>SO²</h3>
                    </div>
                    <div className='face back'>
                        <h3>Dióxido de azufre</h3>
                        <p><b>Efectos en la salud:</b>Dificultad para respirar. Inflamación de las vías respiratorias, 
                        irritación ocular por formación de ácido sulfuroso sobre las mucosas húmedas, edema pulmonar, paro cardíaco, irritación e inflamación del sistema 
                        respiratorio, afecciones e insuficiencias pulmonares, dolor de cabeza o ansiedad.</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='face front'>
                        <img src={o} alt='o' />
                        <h3>O³</h3>
                    </div>
                    <div className='face back'>
                        <h3>Ozono troposférico</h3>
                        <p><b>Efectos en la salud:</b> Envejecimiento prematuro de los pulmones, deterioro de la función 
                        pulmonar, irritación de los ojos, la nariz y la garganta, tos, ataques de asma, dolores de cabeza, 
                        alteración del sistema inmunológico. Gas toxico cuando los valores de concentración son elevados, con 
                        repercusiones importantes en la salud.</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='face front'>
                        <img src={no} alt='no' />
                        <h3>NO²</h3>
                    </div>
                    <div className='face back'>
                        <h3>Dióxido de Nitrógeno</h3>
                        <p><b>Efectos en la salud:</b>Enfermedades de las vías respiratorias como disminución de la 
                        capacidad pulmonar, bronquitis agudas, asma y se considera el culpable de los procesos alérgicos, 
                        sobre todo en niños. Actúa principalmente como un irritante que afecta a la mucosa de los ojos, 
                        la nariz, la garganta y las vías respiratorias. </p>
                    </div>
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
