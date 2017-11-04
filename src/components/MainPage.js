import React from 'react';
import Landing from './Landing';
import Header from './Header';
import Hobbies from './Hobbies';
import Introduction from './Introduction';
import Skills from './Skills';

class MainPage extends React.Component {
    state = {
        showHeader: false
    }

    onScroll = () => {
        const scrollPosition = window.scrollY;
        const headerPos = document.getElementById('introduction').getBoundingClientRect();
        if (scrollPosition > headerPos.top) {
            this.setState(() => ({
                showHeader: true
            }));
        }
    }

    render() {
        return (
            <div>
                <Landing />
                {this.state.showHeader && <Header />}
                <main>
                    <Introduction />
                    <Hobbies />
                    <Skills />
                </main>
            </div>
        );
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }
}

export default MainPage;
