import React from 'react';

class Header extends React.Component {

    handleClick = (e) => {
        const element = e.target.name;
        document.getElementById(element).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
        history.pushState({}, "Landing", `/#${element}`);
    }
    onScroll = () => {
        const scrollPosition = window.scrollY;
        const headerPos = document.getElementById('introduction').getBoundingClientRect();
        if (scrollPosition > headerPos.top) {
            document.querySelector('.header').classList.add('header--visible');
        } else {
            document.querySelector('.header').classList.remove('header--visible');
        }
    }
    render() {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <a className="header__nav-link hidden__mobile-only" name="landing" onClick={this.handleClick}>Landing</a>
                        <a className="header__nav-link" name="introduction" onClick={this.handleClick}>Introduction</a>
                        <a className="header__nav-link hidden__mobile-only" name="hobbies" onClick={this.handleClick}>Hobbies</a>
                        <a className="header__nav-link" name="skills" onClick={this.handleClick}>Skills</a>
                        <a className="header__nav-link" name="projects" onClick={this.handleClick}>Projects</a>
                        <a className="header__nav-link" name="contact" onClick={this.handleClick}>Contact</a>
                    </ul>
                </nav>
            </header>   
        )
    }
    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }
}

export default Header;