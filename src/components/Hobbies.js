import React from 'react';
import HobbyObject from './HobbyObject';

const Hobbies = () => (
    <section id="hobbies" className="section">
        <div className="container">
            <div className="section__header-container">
                <hr className="section__header-border" />
                <h2 className="section__title">Hobbies</h2>
                <h3 className="section__sub-title">What I do in my spare time</h3>
                <hr className="section__header-border" />
            </div>
            <div className="hobbies__container">
                <HobbyObject
                    imageLink="/images/guitar-hobby.jpg"
                    altText="Some of my guitars"
                    hobbyText={
                        "I've been playing guitar since I was 14, I especially like to cover Tool."
                    }
                />
                <HobbyObject
                    imageLink="/images/fitness-hobby.jpg"
                    altText="Me in the gym"
                    hobbyText="I'm in the gym 6 days a week, working hard on improving myself."
                />
                <HobbyObject
                    imageLink="/images/computer-hobby.jpg"
                    altText="My computer"
                    hobbyText="Computers and technology have always interested me."
                />
            </div>
        </div>
    </section>
);

export default Hobbies;