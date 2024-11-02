// File: src/components/ScrollToTop/ScrollToTop.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

// Styled button using styled-components
const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: ${({ theme }) => (theme.background === '#ffffff' ? '#000000' : '#ffffff')};
  color: ${({ theme }) => (theme.background === '#ffffff' ? '#ffffff' : '#000000')};
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1000; /* Ensures the button stays above other elements */

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 12px;
  }
`;

// ScrollToTop Component
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
    <Button onClick={scrollToTop} visible={visible} aria-label="Scroll to Top">
      <FaArrowUp size={20} />
    </Button>
  );
}

export default ScrollToTop;
