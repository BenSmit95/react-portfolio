import React from 'react';
import Landing from './Landing';
import Header from './Header';
import Hobbies from './Hobbies';
import Introduction from './Introduction';
import Skills from './Skills';

const MainPage = () => {
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

export default MainPage;
