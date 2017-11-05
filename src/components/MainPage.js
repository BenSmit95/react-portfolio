import React from 'react';
import Landing from './Landing';
import Header from './Header';
import Hobbies from './Hobbies';
import Introduction from './Introduction';
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
                </main>
            </div>
        );
    }

}

export default MainPage;
