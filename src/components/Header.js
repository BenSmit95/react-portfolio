import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <NavLink to="/introduction" activeClassName="header--navlink-active">Introduction</NavLink>
            <NavLink to="/skills" activeClassName="header--navlink-active">Skills</NavLink>
            <NavLink to="/projects" activeClassName="header--navlink-active">Projects</NavLink>
            <NavLink to="/contact" activeClassName="header--navlink-active">Contact</NavLink>
        </nav>
    </header>
);

export default Header;