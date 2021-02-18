import React from 'react';
import logo from './../../../../res/img/GG_Pixel.png';
import './Characteristic.css';

function Characteristic () {

    return (

        <section className="container">
            <section className="img-speed">
                <img src={logo} alt="Logo"/>
                <h2>Speed</h2>
                <p>Fast load times and <br/>
                   lag free interactions.</p>
            </section>
            <section className="img-intuitive">
                <img src={logo} alt="Logo"/>
                <h2>Intuitive</h2>
                <p>Minimalistic and easy<br/> to
                   use UI/UX.</p>
            </section>
            <section className="img-responsive">
                <img src={logo} alt="Logo"/>
                <h2>Responsive</h2>
                <p>Layouts will work on any<br/>
                   on any device.</p>
            </section>
        </section>

    )

}


export default Characteristic;