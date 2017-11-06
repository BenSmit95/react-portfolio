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
    addAppearClass = (sectionName) => {
        document.querySelector(`#${sectionName} .section__title`).classList.add('appear');
        document.querySelector(`#${sectionName} .section__sub-title`).classList.add('appear');
        document.querySelectorAll(`#${sectionName} .section__header-border`)[0].classList.add('appear__border');
        document.querySelectorAll(`#${sectionName} .section__header-border`)[1].classList.add('appear__border');
    }
    onScroll = () => {
        const introductionY = document.getElementById('introduction').getBoundingClientRect().top;
        const hobbiesY = document.getElementById('hobbies').getBoundingClientRect().top;
        const skillsY = document.getElementById('skills').getBoundingClientRect().top;
        const projectsY = document.getElementById('projects').getBoundingClientRect().top;
        const contactY = document.getElementById('contact').getBoundingClientRect().top;

        if (introductionY < 700) this.addAppearClass('introduction');
        if (hobbiesY < 700) this.addAppearClass('hobbies');
        if (skillsY < 700) this.addAppearClass('skills');
        if (projectsY < 700) this.addAppearClass('projects');
        if (contactY < 1000) this.addAppearClass('contact');
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
