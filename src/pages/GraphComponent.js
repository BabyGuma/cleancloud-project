import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import axios from 'axios';

const GraphComponent = () => {
    const chartRef = useRef(null);
    const [data, setData] = useState({ labels: [], values: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data');
                const { labels, values } = response.data;

                setData({ labels, values });
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartRef.current && data.labels.length && data.values.length) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Valores',
                            data: data.values,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default GraphComponent;