// NavBar.js
import React from 'react';

function NavBar() {
    return (
        <div className="navbar bg-blue-500 p-4 shadow-lg">
            <a href="#home" className="nav-link text-white mx-2">Home</a>
            <a href="#education" className="nav-link text-white mx-2">Education</a>
            <a href="#experience" className="nav-link text-white mx-2">Experience</a>
            <a href="#projects" className="nav-link text-white mx-2">Projects</a>
        </div>
    );
}

export default NavBar;
