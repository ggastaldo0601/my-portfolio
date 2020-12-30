import React from 'react';
import logo from './../../../res/img/GG_Pixel.png';  

import './Body.css';

function Body () {

    return (

        <section className="body">
            <section className="body-intro">
            Hello, I'm Giovanni Gastaldo.<br></br> 
            I'm a Software Engineer.
            </section>
            <section className="body-top__container">
            <section className="body-img__speed">
                <img src={logo} alt="Logo"/>
                <h2>Speed</h2>
                <p>This is a description.</p>
            </section>
            <section className="body-img__intuit">
                <img src={logo} alt="Logo"/>
                <h2>Intuitive</h2>
                <p>This is a description of this img.</p>
            </section>
            <section className="body-img__respon">
                <img src={logo} alt="Logo"/>
                <h2>Responsive</h2>
                <p>This is a description of this img.</p>
            </section>
            </section>
            <section className="body-bottom__left">

            </section>
            <section className="body-bottom__right"> 

            </section>
        </section>

    )

}


export default Body;