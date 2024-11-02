// src/App.js

import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Internships from './components/Internships/Internships';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';

// Define light and dark themes
const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  background: '#121212',
  color: '#ffffff',
};

// Global styles to apply background and text color
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.5s linear, color 0.5s linear;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <CustomThemeProvider>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Navbar toggleTheme={toggleTheme} isDark={isDark} />
          <Home />
          <About />
          <Projects />
          <Education />
          <Skills />
          <Internships />
          <Contact />
          <ScrollToTop />
        </div>
      </StyledThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
