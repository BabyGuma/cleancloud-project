import React, { useState } from 'react';
import backgroundImage from '../components/images/fondo-iot.jpg';
import './Screen3.css'

function Screen3() {
    const [buttons, setButtons] = useState([
        { title: 'Sensor de calidad del aire: ', state: 'off' },
        { title: 'Sensor de calidad del aire: ', state: 'off' },
        { title: 'Sensor de calidad del aire: ', state: 'off' }
    ]);

    const toggleButtonState = (index) => {
        setButtons(prevButtons => {
            const newButtons = [...prevButtons];
            newButtons[index] = {
                ...newButtons[index],
                state: newButtons[index].state === 'on' ? 'off' : 'on'
            };
            return newButtons;
        });
    };
    return (
        <div className='screen3' id='screen3'>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}>
                <h3>CONTROL DE SENSORES DE CALIDAD DEL AIRE</h3>
                {buttons.map((button, index) => (
                    <div key={index}>
                        <h3>{button.title}</h3>
                        <button
                            style={{ backgroundColor: button.state === 'on' ? 'green' : 'red' }}
                            onClick={() => toggleButtonState(index)}
                        >
                            {button.state === 'on' ? 'On' : 'Off'}
                        </button>
                        <p>{button.state === 'on' ? 'Sensor prendido' : 'Sensor apagado'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Screen3;