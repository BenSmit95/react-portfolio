import React from 'react';
import ProjectItem from './ProjectItem';
import {
    LogoHtml,
    LogoCSS,
    LogoJS,
    LogoJQuery,
    LogoSass,
    LogoNodeJS,
    LogoReact,
    LogoRedux,
    LogoGit,
    LogoGitHub,
    LogoHeroku,
    LogoWebpack
} from './logos/Logos';

class Projects extends React.Component {
    render() {
        return (
            <section id="projects" className="section">
                <div className="container container--large">
                    <div className="section__header-container">
                        <hr className="section__header-border" />
                        <h2 className="section__title">Projects</h2>
                        <h3 className="section__sub-title">Here are some of the things I've made</h3>
                        <hr className="section__header-border" />
                    </div>
                    <div className="projects__list">
                        <ProjectItem 
                            color="blue" 
                            link="https://react-expensify-app-ben.herokuapp.com/"
                            name="expensify"
                            subText="A single page React app to help you manage your expenses!"
                            imageLink="/images/expensify-picture.png"
                            skills={[
                                LogoHtml,
                                LogoCSS,
                                LogoSass,
                                LogoJS,
                                LogoNodeJS,
                                LogoReact,
                                LogoRedux,
                                LogoGit,
                                LogoHeroku,
                                LogoWebpack
                            ]}
                        />
                        <ProjectItem
                            color="green"
                            link="https://codepen.io/CyclopsPirate/pen/XeZNpy"
                            name="Ron Swanson Quote Generator"
                            subText="Making AJAX calls in 4 different ways!"
                            imageLink="/images/quote-generator-picture.png"
                            skills={[
                                LogoHtml,
                                LogoCSS,
                                LogoJS,
                                LogoJQuery
                            ]}
                        />
                        <ProjectItem
                            color="light-blue"
                            link="https://react-memory-app.herokuapp.com/"
                            name="Memory"
                            subText="My first react app!"
                            imageLink="/images/memory-picture.png"
                            skills={[
                                LogoHtml,
                                LogoCSS,
                                LogoJS,
                                LogoReact,
                                LogoHeroku
                            ]}
                        />
                        <ProjectItem
                            color="orange"
                            link="https://guess-the-flag.herokuapp.com/"
                            name="Guess The Flag"
                            subText="Combining AJAX and React for the first time"
                            imageLink="/images/guess-the-flag-picture.png"
                            skills={[
                                LogoHtml,
                                LogoCSS,
                                LogoJS,
                                LogoReact,
                                LogoHeroku
                            ]}
                        />
                    </div>
                </div>
            </section>
        );
    };
};

export default Projects;