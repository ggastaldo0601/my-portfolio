import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

function Header () {

    return (
        <section className="header">
            <section className="header-left__logo">
            <a href="/" className="header-logo">LOGO</a>
            </section>
            <section className="header-right__navbar">
            <Navbar />
            </section>
        </section>
    )

}


export default Header;