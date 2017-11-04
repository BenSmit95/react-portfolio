import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <Link to="/">Logo</Link>
        <nav>
            <NavLink className="header__navlink" to="/introduction" activeClassName="header__navlink--active">Introduction</NavLink>
            <NavLink className="header__navlink" to="/skills" activeClassName="header__navlink--active">Skills</NavLink>
            <NavLink className="header__navlink" to="/projects" activeClassName="header__navlink--active">Projects</NavLink>
            <NavLink className="header__navlink" to="/contact" activeClassName="header__navlink--active">Contact</NavLink>
        </nav>
    </header>   
);

export default Header;