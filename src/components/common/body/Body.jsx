import React from 'react';  
import Intro from './intro/Intro';
import Characteristic from './characteristic/Characteristic';
import Portfolio from './portfolio/Portfolio';
import About from './about/About';
import './Body.css';


function Body () {

    return (

        <section className="body">
            <section className="body-intro">
            <Intro />
            </section>
            <section className="body-characteristic">
            <Characteristic />
            </section>
            <section className="body-about">
            <About />
            </section>
            <section className="body-portfolio">
            <Portfolio />
            </section>
        </section>

    )

}


export default Body;