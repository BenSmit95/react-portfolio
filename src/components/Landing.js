import React from 'react';

class Landing extends React.Component {
    state = {
        toggleTexts: ['Creative', 'Curious', 'Innovative'],
        toggleTextIterator: 0,
        toggleTextId: 'undefined'
    }

    handleButtonClick = () => {
        document.getElementById('introduction').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        history.pushState({}, 'Introduction', '/#introduction');
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
            <section id="landing">
                {toggleTexts}
                <div className="landing__message">
                    <h1>Hey there!</h1>
                    <h3>Welcome to my page</h3>
                    <button onClick={this.handleButtonClick} className="landing__button">Proceed</button>
                </div>
            </section>
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

export default Landing;