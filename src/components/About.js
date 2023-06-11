import React from 'react'
import './About.css'
import angel from '../components/images/angel.jfif'
import angelica from '../components/images/angelica.jpg'
import carlos from '../components/images/carlos.jpg'
import erick from '../components/images/erick.jpg'
import lilliam from '../components/images/lilliam.jpg'

const About = () => {
    return (
        <div>
        <h1>SOBRE NOSOTROS</h1>
        <div className="main-container" id="about">
        <div className="cards">
            <div>
            <img src={angel} alt="img"/>
            <h4>Angel Guarneros</h4>
            <p>Project management</p>
            </div>
        </div>
        <div className="cards">
            <div>
            <img src={carlos} alt="img"/>
            <h4>Carlos Jose</h4>
            <p>Programmer backend</p>
            </div>
        </div>
        <div className="cards">
            <div>
            <img src={erick} alt="img"/>
            <h4>Erick Juarez</h4>
            <p>Programmer backend</p>
            </div>
        </div>
        <div className="cards">
            <div>
            <img src={lilliam} alt="img"/>
            <h4>Lilliam Romero</h4>
            <p>Programmer frontend and swiftie</p>
            </div>
        </div>
        <div className="cards">
            <div>
            <img src={angelica} alt="img"/>
            <h4>Angelica Ramos</h4>
            <p>Logo creator</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default About
