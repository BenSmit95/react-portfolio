import React from 'react';

class ContactForm extends React.Component {
    state = {
        name: '',
        company: '',
        email: '',
        message: ''
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => ({
            [name]: value
        }));
    }
    

    handleSubmit = (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <form className="contact__form" method="POST" action="https://formspree.io/benjismit@live.nl">
                <label>
                    <span className="contact__label">Name:</span>
                    <input 
                        className="contact__input" 
                        type="text" 
                        name="name"
                        onChange={this.handleChange} 
                        placeholder="name *" 
                        value={this.state.name} 
                        required />
                </label>
                <label>
                    <span className="contact__label">Company (optional):</span>
                    <input 
                        className="contact__input" 
                        type="text" 
                        name="company"
                        onChange={this.handleChange} 
                        placeholder="company" 
                        value={this.state.company} />
                    </label>
                <label>
                    <span className="contact__label">Email-address:</span>
                    <input 
                        className="contact__input" 
                        type="email" 
                        name="email"
                        onChange={this.handleChange} 
                        placeholder="email address *" 
                        value={this.state.email} 
                        required />
                    </label>
                <label>
                    <span className="contact__label">Message:</span>
                    <textarea 
                        className="contact__input" 
                        name="message"
                        onChange={this.handleChange} 
                        placeholder="message *" 
                        value={this.state.message} 
                        rows="8"
                        required/>
                </label>
                <button className="contact__button" type="submit">Send</button>
            </form>
        )
    }
}

export default ContactForm;