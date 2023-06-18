import React, { useState } from 'react';
import './Screen3.css'
import mqttClient from '../mqtt/mqttClient'; // Ruta al archivo mqttClient.js


const Screen3 = () => {
    const [sensorData, setSensorData] = useState({});

    const startProgram = () => {
    mqttClient.startGeneratingData((newSensorData) => {
        setSensorData(newSensorData);
    });
};

const stopProgram = () => {
    mqttClient.stopGeneratingData();
};

return (
    <div>
        <button onClick={startProgram}>Iniciar programa</button>
        <button onClick={stopProgram}>Detener programa</button>
        <pre>{JSON.stringify(sensorData, null, 2)}</pre>
    </div>
    );
};
export default Screen3;