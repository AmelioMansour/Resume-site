import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
;

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative bg-blue-500 p-4 shadow-lg">
            {/* Always show the desktop navbar on medium screens and above */}
            <div className="hidden md:flex justify-between items-center">
                <a href="#home" className="nav-link text-white mx-2">Home</a>
                <a href="#education" className="nav-link text-white mx-2">Education</a>
                <a href="#experience" className="nav-link text-white mx-2">Experience</a>
                <a href="#projects" className="nav-link text-white mx-2">Projects</a>
            </div>
            
            {/* Mobile navbar button */}
            <div className="md:hidden flex justify-between items-center">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FiX className="text-white h-6 w-6" /> : <FiMenu className="text-white h-6 w-6" />}
                </button>
            </div>
            
            {/* Mobile navigation, which shows or hides based on state */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full">
                    <a href="#home" className="block bg-blue-500 text-white py-2 px-4">Home</a>
                    <a href="#education" className="block bg-blue-500 text-white py-2 px-4">Education</a>
                    <a href="#experience" className="block bg-blue-500 text-white py-2 px-4">Experience</a>
                    <a href="#projects" className="block bg-blue-500 text-white py-2 px-4">Projects</a>
                </div>
            )}
        </div>
    );
    
}

export default NavBar;
