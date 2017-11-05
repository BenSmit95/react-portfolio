import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => (
    <section id="contact" className="section">
        <div className="container">
            <h2 className="section__title">Contact</h2>
            <h3 className="section__sub-title">Send me a message and I'll respond as soon as possible!</h3>
            <ContactForm />
        </div>
    </section>
);

export default Contact;