import React from 'react';
import './Chart.css'
import {Link} from "react-router-dom";

const Chart = () => {
    return (
        <div>
            <div className='chart' id='chart'>
                <div className='container'>
                    <div className='col-2'>
                        <button className='button'>
                        <Link to='/more'>MÁS INFORMACIÓN</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart
