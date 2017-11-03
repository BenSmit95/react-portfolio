import React from 'react';

class LandingPage extends React.Component {
    state = {
        toggleTexts: ['Creative', 'Curious', 'Innovative'],
        toggleTextIterator: 0
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
            <section className="landing">
                {toggleTexts}
                <div className="landing__message">
                    <h1>Hey there!</h1>
                    <h3>Welcome to my portfolio</h3>
                    <button>Proceed</button>
                </div>
            </section>
        );
    }

    // after mounting, set a timer to toggle the text
    componentDidMount() {
        setInterval(() => {
            const toggleTextIterator = (this.state.toggleTextIterator + 1) % this.state.toggleTexts.length;
            this.setState(() => ({
                toggleTextIterator
            }));
        }, 3500)
    }
};

export default LandingPage;