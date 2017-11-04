import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    state = {
        toggleTexts: ['Creative', 'Curious', 'Innovative'],
        toggleTextIterator: 0,
        toggleTextId: 'undefined'
    }

    render() {
        // Which text is visible?
        const toggleTexts = this.state.toggleTexts.map((text, index) => (
            this.state.toggleTextIterator === index ? (
                <p key={index} className="landing__toggle-text">{text}</p>
            ) : (
                <p key={index} className="hidden landing__toggle-text">{text}</p>
            )
        ))

        return (
            <div className="landing">
                {toggleTexts}
                <div className="landing__message">
                    <h1>Hey there!</h1>
                    <h3>Welcome to my portfolio</h3>
                    <Link className ="button" to="/introduction">Proceed</Link>
                </div>
            </div>
        );
    }

    // after mounting, set a timer to toggle the text
    componentDidMount = () => {
        const toggleTextId = setInterval(() => {
            const toggleTextIterator = (this.state.toggleTextIterator + 1) % this.state.toggleTexts.length;
            this.setState(() => ({
                toggleTextIterator
            }));
        }, 3500)
        this.setState(() => ({
            toggleTextId
        }));
    }

    // Remove the toggle text when unmounting
    componentWillUnmount = () => {
        clearInterval(this.state.toggleTextId);
    }
};

export default LandingPage;