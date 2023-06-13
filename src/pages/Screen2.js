import React, { useState } from 'react'
import './Screen2.css'
import { Link } from "react-router-dom";
import imgsoluc from '../components/images/canva4.png'

const Screen2 = () => {
    const [values, setValues] = useState({
        place: "",
        age: "",
        sex: "",
        enfermedad: "",
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setValues({
            values,
            [name] : value,
        });
    };

    const handleForm = (event) => {
        event.preventDefault()
        console.log(values)
    };

    return (
        <>
            <div className='screen2' id='screen2'>
                <div className='formulario'>
                    <form onSubmit={handleForm}>
                        <h2>Formulario</h2>
                        <input
                            type='text'
                            name="place"
                            value={values.place ||""}
                            placeholder='Lugar que visitaste'
                            onChange={handleInputChange}
                        />
                        <input
                            type='text'
                            name="age"
                            value={values.age ||""}
                            placeholder='¿Cuál es tu edad?'
                            onChange={handleInputChange}
                        />
                        <input
                            type='text'
                            name="sex"
                            value={values.sex ||""}
                            placeholder='¿Cuál es tu sexo?'
                            onChange={handleInputChange}
                        />
                        <input
                            type='text'
                            name="enfermedad"
                            value={values.enfermedad ||""}
                            placeholder='¿Sufres de alguna enfermdad respiratoria?'
                            onChange={handleInputChange}
                        />
                        <button type='submit'>Enviar datos</button>
                    </form>
                </div>
                <div className='imgSoluciones'>
                    <img src={imgsoluc} alt='imgsoluc' />
                </div>
                <div className='btn'>
                    <button className='button'>
                        <Link to='/sensores'>GESTIONAR SENSORES</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Screen2;
