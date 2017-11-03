import React from 'react';

class LandingPage extends React.Component {
    state = {
        toggleTexts: ['Reliable', 'Curious', 'Disciplined'],
        toggleTextIterator: 0
    }

    render() {
        // Which text is visible?
        const toggleTexts = this.state.toggleTexts.map((text, index) => (
            this.state.toggleTextIterator === index ? (
                <p key={index}>{text}</p>
            ) : (
                <p key={index} className="hidden">{text}</p>
            )
        ))

        return (
            <section>
                {toggleTexts}
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
        }, 2000)
    }
};

export default LandingPage;