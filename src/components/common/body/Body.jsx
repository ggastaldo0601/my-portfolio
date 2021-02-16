import React from 'react';  
import Intro from './intro/Intro';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import './Body.css';


function Body () {

    return (

        <section className="body">
            <section className="body-intro">
            <Intro />
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