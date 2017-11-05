import React from 'react';
import { LogoHtml, 
    LogoCSS, 
    LogoJS,
    LogoJQuery,
    LogoSass, 
    LogoNodeJS, 
    LogoReact,
    LogoRedux,
    LogoJava,
    LogoCSharp,
    LogoGit,
    LogoGitHub,
    LogoHeroku,
    LogoWebpack
 } from './logos/Logos';

const Skills = () => (
    <section id="skills" className="section">
        <div className="container container--large">
            <h2 className="section__title">Skills</h2>
            <h3 className="section__sub-title">Here are the tools and technologies I have experience with</h3>
            <ul className="skills__list">
                <li className="skills__list-item">
                    <p>HTML5</p>
                    <LogoHtml />
                </li>
                <li className="skills__list-item">
                    <p>CSS3</p>
                    <LogoCSS />
                </li>
                <li className="skills__list-item">
                    <p>JavaScript (ES6)</p>
                    <LogoJS />
                </li>
                <li className="skills__list-item">
                    <p>jQuery</p>
                    <LogoJQuery />
                </li>
                <li className="skills__list-item">
                    <p>Sass</p>
                    <LogoSass />
                </li>
                <li className="skills__list-item">
                    <p>NodeJS</p>
                    <LogoNodeJS />
                </li>
                <li className="skills__list-item">
                    <p>ReactJS</p>
                    <LogoReact />
                </li>
                <li className="skills__list-item">
                    <p>Redux</p>
                    <LogoRedux />
                </li>
                <li className="skills__list-item">
                    <p>Java</p>
                    <LogoJava />
                </li>
                <li className="skills__list-item">
                    <p>CSharp</p>
                    <LogoCSharp />
                </li>
                <li className="skills__list-item">
                    <p>Git</p>
                    <LogoGit />
                </li>
                <li className="skills__list-item">
                    <p>GitHub</p>
                    <LogoGitHub />
                </li>
                <li className="skills__list-item">
                    <p>Heroku</p>
                    <LogoHeroku />
                </li>
                <li className="skills__list-item">
                    <p>Webpack</p>
                    <LogoWebpack />
                </li>
            </ul>
        </div>
    </section>
)

export default Skills;