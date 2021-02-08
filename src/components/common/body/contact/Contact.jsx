import React from 'react';
import './Contact.css';

function Contact () {

    return (

        <section className="contact">
            <section className="firstname">
                <label>Enter your first name: *</label><br/>
                <input type="text" id="name" required minLength="2" maxLength="12" size="24" placeholder="Name" />
            </section>
            <section className="email">
                <label>Enter your email: *</label><br/>
                <input type="email" id="email" size="24" placeholder="Email2021@gmail.com" required />
            </section>
            <section className="message">
                <label>Type a message or description you would like to attach:</label><br/>
                <textarea rows="8" cols="50" placeholder="Hello, let's get in touch as soon as possible!"></textarea>
            </section>
            <section className="submit">
                <input type="submit" value="Send Request"/>    
            </section>
        </section>

    )

}

export default Contact;