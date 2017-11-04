import React from 'react';

const Introduction = () => (
    <section id="introduction" className="section">
        <div className="container">
            <h2 className="section__title">Introduction:</h2>
            <div className="introduction__content">
                <figure className="introduction__figure">
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
                        My contact info is down below.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Introduction;