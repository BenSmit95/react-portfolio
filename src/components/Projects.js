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
                    </div>
                </div>
            </section>
        );
    };
};

export default Projects;