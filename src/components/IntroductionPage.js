import React from 'react';
import HobbyObject from './HobbyObject';

const IntroductionPage = () => (
    <div className="container">
        <section className="introduction__aboutme section">
            <h2 className="section__header">About me:</h2>
            <div className="section__content">
                <figure className="introduction__picture">
                    <img src="/images/me.png" alt="A picture of me" />
                    <figcaption>That's me!</figcaption>
                </figure>
                <div>
                    <p>
                        Hey there! My name is Benjamin, and I'm a self taught web developer based in Katwijk, ZH. My skills mainly lie in front-end development, 
                        where I use technologies like React and Sass to make interesting web applications.
                    </p>
                    <p>
                        I'm always learning more though! Right now I'm focusing on learning more about backend technologies, like Node and Express. 
                        I don't like sitting still and am always looking for the next challenge.
                    </p>
                    <p>
                        That's why I am looking for a junior position at a web development company, where I can push my limits and develop my skills.
                        My contact info is on THIS page.
                    </p>
                </div>
            </div>
        </section>
        <section className="section">
            <h2 className="section__header">Hobbies</h2>
            <div className="introduction__hobbies">
                <HobbyObject 
                    imageLink="/images/guitar-hobby.jpg" 
                    altText="Some of my guitars"
                    hobbyText= {
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
        </section>
    </div>
)

export default IntroductionPage