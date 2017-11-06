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
    state = {
        introductionVisible: false,
        hobbiesVisible: false,
        skillsVisible: false,
        projectsVisible: false,
        contactVisible: false,
    }
    addAppearClass = (sectionName) => {
        document.querySelector(`#${sectionName} .section__title`).classList.add('appear');
        document.querySelector(`#${sectionName} .section__sub-title`).classList.add('appear');
        document.querySelectorAll(`#${sectionName} .section__header-border`)[0].classList.add('appear__border');
        document.querySelectorAll(`#${sectionName} .section__header-border`)[1].classList.add('appear__border');
    }
    onScroll = () => {
        if (!this.state.introductionVisible) {
            const introductionY = document.getElementById('introduction').getBoundingClientRect().top;
            if (introductionY < 500) {
                this.setState(() => ({
                    introductionVisible: true
                }));
                this.addAppearClass('introduction');
            }
        }
        if (!this.state.hobbiesVisible) {
            const hobbiesY = document.getElementById('hobbies').getBoundingClientRect().top;
            if (hobbiesY < 500) {
                this.setState(() => ({
                    hobbiesVisible: true
                }));
                this.addAppearClass('hobbies');
            }
        }
        if (!this.state.skillsVisible) {
            const skillsY = document.getElementById('skills').getBoundingClientRect().top;
            if (skillsY < 500) {
                this.setState(() => ({
                    skillsVisible: true
                }));
                this.addAppearClass('skills');
                const skillsList = document.getElementsByClassName('skills__list-item');
                const timeBetweenAppears = 300;
                for (let i = 0; i < skillsList.length; i++) {
                    setTimeout(() => {
                        skillsList[i].classList.add('skills__list-item--appear');
                    }, i * timeBetweenAppears + 1500)
                }
            }
        }
        if (!this.state.projectsVisible) {
            const projectsY = document.getElementById('projects').getBoundingClientRect().top;
            if (projectsY < 500) {
                this.setState(() => ({
                    projectsVisible: true
                }));
                this.addAppearClass('projects');
            }
        }
        if (!this.state.contactVisible) {
            const contactY = document.getElementById('contact').getBoundingClientRect().top;
            if (contactY < 800) {
                this.setState(() => ({
                    contactVisible: true
                }));
                this.addAppearClass('contact');
            }
        }
    }

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

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }
}

export default MainPage;
