import React from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;