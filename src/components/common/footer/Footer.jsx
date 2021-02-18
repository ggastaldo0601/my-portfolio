import React from 'react';
import logo from './../../../res/img/GG_Pixel.png';
import './Footer.css';

function Footer () {

    return (

        <section className="footer">
            <section className="footer-center">
            <p>Giovanni Gastaldo &copy; 2021</p> 
            </section>
            <section className="footer-navbar">
            <img src={logo} alt="logo"/>
            <img src={logo} alt="logo"/>
            </section>
        </section>

    )

}

export default Footer;