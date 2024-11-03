import React from 'react';
import {ReactTyped} from 'react-typed';
import { motion } from 'framer-motion';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import News from '../News/News';
import Publications from '../Publications/Publications';
import Contact from '../Contact/Contact';

const imagePath = `${process.env.PUBLIC_URL}/media/images`;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const offsetTop = section.offsetTop - 70;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

const Home = ({ backgroundOpacity = 0.4 }) => (
  <div>
    <section id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imagePath}/background1.jpg')`,
        }}
      />

      {/* Overlay with controlled opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'black',
          opacity: backgroundOpacity,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center space-y-6 px-4 md:px-8">
        {/* Profile Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8"
        >
          <img
            src={`${imagePath}/swapnik2.jpg`}
            alt="Varala Nandu Swapnik"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name and Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-sm bg-black/20 p-4 md:p-8 rounded-lg shadow-xl max-w-lg md:max-w-2xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
            Varala Nandu Swapnik
          </h1>
          <ReactTyped
            strings={[
              "Aspiring Data Scientist",
              "Machine Learning Enthusiast",
              "Passionate about Coding"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-xl md:text-2xl font-medium text-white"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={`${process.env.PUBLIC_URL}/media/Swapnik Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full shadow-lg transform transition-transform hover:scale-105 text-sm md:text-base"
          >
            My Resume
          </a>

          <button
            onClick={() => scrollToSection('about')}
            className="px-6 py-3 md:px-8 md:py-3 border-2 border-white text-white rounded-full transition-colors hover:bg-white/20 shadow-lg transform transition-transform hover:scale-105 text-sm md:text-base"
          >
            Explore Me
          </button>
        </motion.div>
      </div>
    </section>

    {/* Overlay Content Sections with unique IDs */}
    <section id="about">
      <About />
    </section>
    <section id="news">
      <News />
    </section>
    <section id="publications">
      <Publications />
    </section>
    <section id="experience">
      <Experience />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
);

export default Home;
