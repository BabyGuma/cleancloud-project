import mqtt from 'mqtt';
import faker from 'faker';

const fake = faker.fake();

const fecha_minima = new Date('2023-05-04');
const fecha_maxima = new Date('2023-06-13');

let isGenerating = false;
let sensorData = {};

const brokerAddress = 'localhost'; // Cambiar por la dirección IP o nombre de host del broker MQTT
const brokerPort = 1883; // Puerto predeterminado de MQTT

let client = null;

const onConnect = () => {
    console.log('Conectado al broker MQTT');
    client.subscribe('sensor_data');
};

const onPublish = () => {
    console.log('Mensaje publicado');
};

const connectToBroker = () => {
    client = mqtt.connect(`mqtt://${brokerAddress}:${brokerPort}`);
    client.on('connect', onConnect);
    client.on('publish', onPublish);
};

const generateData = () => {
    if (isGenerating) {
        const device_id = Object.keys(sensorData).length + 1;
        const fecha_generada = fake.date.between(fecha_minima, fecha_maxima).toISOString().split('T')[0];
        const pm25 = fake.random.number({ min: 10, max: 50 });
        const pm10 = fake.random.number({ min: 10, max: 50 });
        const oz_tros = fake.random.number({ min: 10, max: 50 });
        const diox_nit = fake.random.number({ min: 10, max: 50 });
        const diox_azu = fake.random.number({ min: 10, max: 50 });

    const newSensorData = {
        Num_serie: fake.random.number({ min: 1, max: 100 }),
        Fecha: fecha_generada,
        PM25: pm25,
        PM10: pm10,
        OZ_TROS: oz_tros,
        DIOX_NIT: diox_nit,
        DIOX_AZU: diox_azu,
        PROMEDIO: (pm25 + pm10 + oz_tros + diox_nit + diox_azu) / 5,
    };

    sensorData = {
        ...sensorData,
        [device_id]: newSensorData,
    };

    const topic = 'sensor_data';
    const payload = JSON.stringify(newSensorData);
    client.publish(topic, payload);

    setTimeout(generateData, 1000);
}
};

const startGeneratingData = (callback) => {
    if (!isGenerating) {
        isGenerating = true;
        connectToBroker();
        generateData();
    }

if (callback) {
    callback(sensorData);
}
};

const stopGeneratingData = () => {
    if (isGenerating) {
    isGenerating = false;
    client.end();
}
};

const mqttClient = {
    startGeneratingData,
    stopGeneratingData,
};

export default mqttClient;
