import React from 'react';
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    return (
        <div>
            <Nav/>
            <div id="home">
                <Home/>
            </div>
            <div id="projects">
                <MyProjects/>
            </div>
            <div id="about">
                <AboutMe/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    );
}

export default App;