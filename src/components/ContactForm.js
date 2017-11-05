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
            <div>
                <form method="POST" action="https://formspree.io/benjismit@live.nl">
                    <input type="text" name="name" onChange={this.handleChange} placeholder="name" value={this.state.name} required />
                    <input type="text" name="company" onChange={this.handleChange} placeholder="company" value={this.state.company} />
                    <input type="email" name="email" onChange={this.handleChange} placeholder="email address" value={this.state.email} required />
                    <textarea name="message" onChange={this.handleChange} placeholder="message" value={this.state.message} required/>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;