import React from 'react';
import {Routes,Route} from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";


function App() {
return (
        <div>
            <Nav/>
            <Routes>
            <Route path="/" element={<Home/>}/>    
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<MyProjects/>}/>
        </Routes>
    </div>
);
}

export default App;