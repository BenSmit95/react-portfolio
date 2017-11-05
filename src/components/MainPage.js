import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Hobbies from './Hobbies';
import Introduction from './Introduction';
import Landing from './Landing';
import Projects from './Projects';
import Skills from './Skills';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <Landing />
                <Header />
                <main>
                    <Introduction />
                    <Hobbies />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        );
    }

}

export default MainPage;
