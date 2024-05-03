import React from 'react';
import { Link } from 'react-router-dom';

const scrollToPoint = (event) => {
    event.preventDefault();  // This stops the default anchor behavior
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={(event) => scrollToPoint(event, 'home')}>CarnageCode</Link>
        <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a href="#home" onClick={scrollToPoint} className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" onClick={scrollToPoint} className="nav-link">About</a></li>
            <li className="nav-item"><a href="#projects" onClick={scrollToPoint} className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#blogs" onClick={scrollToPoint} className="nav-link">Blogs</a></li>
            <li className="nav-item"><a href="#skills" onClick={scrollToPoint} className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#resume" onClick={scrollToPoint} className="nav-link">Resume</a></li>
            <li className="nav-item"><a href="#contact" onClick={scrollToPoint} className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
