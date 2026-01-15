import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </div>
    );
}

export default Nav;