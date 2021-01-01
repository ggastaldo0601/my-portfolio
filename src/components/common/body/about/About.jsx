import React from 'react';
import logo from './../../../../res/img/GG_Pixel.png';
import './About.css';

function About () {

    return (

        <section className="container">
            <section className="img-speed">
                <img src={logo} alt="Logo"/>
                <h2>Speed</h2>
                <p>This is a description.</p>
            </section>
            <section className="img-intuitive">
                <img src={logo} alt="Logo"/>
                <h2>Intuitive</h2>
                <p>This is a description.</p>
            </section>
            <section className="img-responsive">
                <img src={logo} alt="Logo"/>
                <h2>Responsive</h2>
                <p>This is a description.</p>
            </section>
        </section>

    )

}


export default About;