// src/components/ScrollToTop/ScrollToTop.js

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Function to toggle visibility based on scroll position
  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      className={`fixed bottom-8 right-8 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition-transform transform ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;
