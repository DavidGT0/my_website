import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">Portfolio</Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;