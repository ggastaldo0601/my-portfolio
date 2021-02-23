import React from 'react';

import './About.css';

function About ()   {

    return(
        <section className="about">
        <section className="about-me">
       
        <h2>Who am I?</h2>
        <p>I'm a Software Engineer in Eustis, FL.<br/>
           I have a passion for learning and<br/> 
           I'm enthusiastic about creating intuitive<br/> 
           and dynamic user experiences.
        </p>
        </section>
        <section className="about-skills">
        <h2>Skills</h2>
        <label>C#</label>
        <label>Java</label>
        <label>Javascript</label>
        <label>HTML</label>
        <label>CSS</label>
        <label>SQL</label>

        </section>
    </section>
    )

}

export default About;