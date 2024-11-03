import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
    setNavOpen(false); // Close the nav menu on mobile after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'news', label: 'News' },
    { id: 'publications', label: 'Publications' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Brand Name */}
        <div className="flex-shrink-0">
          <h1
            className="text-2xl font-bold cursor-pointer text-white select-none"
            onClick={() => scrollToSection('home')}
          >
            My Portfolio
          </h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer text-white hover:text-blue-500 transition-colors duration-300 select-none"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {navOpen && (
        <motion.div
          className="md:hidden bg-gray-900"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer text-white hover:text-blue-500 transition-colors duration-300 select-none"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
