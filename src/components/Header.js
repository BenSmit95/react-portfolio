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
    render() {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <a className="header__nav-link" name="landing" onClick={this.handleClick}>Landing</a>
                        <a className="header__nav-link" name="introduction" onClick={this.handleClick}>Introduction</a>
                        <a className="header__nav-link" name="hobbies" onClick={this.handleClick}>Hobbies</a>
                        <a className="header__nav-link" name="skills" onClick={this.handleClick}>Skills</a>
                        <a className="header__nav-link" name="projects" onClick={this.handleClick}>Projects</a>
                        <a className="header__nav-link" name="contact" onClick={this.handleClick}>Contact</a>
                    </ul>
                </nav>
            </header>   
        )
    }
}

export default Header;