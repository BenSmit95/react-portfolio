import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => (
    <section id="contact" className="section">
        <div className="container">
            <div className="section__header-container">
                <hr className="section__header-border" />
                <h2 className="section__title">Contact</h2>
                <h3 className="section__sub-title">Send me a message and I'll respond as soon as possible!</h3>
                <hr className="section__header-border" />
            </div>
            <ContactForm />
        </div>
    </section>
);

export default Contact;