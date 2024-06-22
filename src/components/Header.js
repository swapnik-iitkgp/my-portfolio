// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><Link to="/" onClick={() => scrollToSection('about')}>About</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('projects')}>Projects</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('experience')}>Experience</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('skills')}>Skills</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('education')}>Education</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
          <li><Link to="/resume">Resume / CV</Link></li> {/* New menu option */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
