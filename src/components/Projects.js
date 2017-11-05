import React from 'react';
import ProjectItem from './ProjectItem';
import {
    LogoHtml,
    LogoCSS,
    LogoJS,
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
            <section id="projects">
                <div className="container">
                    <h2 className="section__title">Projects</h2>
                    <h3 className="section__sub-title">Here are some of the things I've made</h3>
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
                                LogoJS
                            ]}
                        />
                    </div>
                </div>
            </section>
        );
    };
};

export default Projects;