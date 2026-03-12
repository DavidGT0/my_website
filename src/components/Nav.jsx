import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">Portfolio</Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink to="/" className={({isActive}) => isActive ? "nav-links active" : "nav-links"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className={({isActive}) => isActive ? "nav-links active" : "nav-links"}>Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({isActive}) => isActive ? "nav-links active" : "nav-links"}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({isActive}) => isActive ? "nav-links active" : "nav-links"}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;