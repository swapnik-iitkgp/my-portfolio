// src/components/About/About.js

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from './skillsData';

const About = () => {
  const researchInterests = [
    'Artificial Intelligence and Machine Learning',
    'Computer Vision and Image Processing',
    'Natural Language Processing',
    'Materials Informatics',
    'Data Science and Analytics',
    'Deep Learning',
    'Computational Materials Science',
    'Reinforcement Learning',
  ];

  return (
    <section id="about" className="py-16 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
          <span className="mr-2">
            <span className="text-5xl text-blue-500 font-extrabold">A</span>BOUT
          </span>
          <span>
            <span className="text-5xl text-red-500 font-extrabold">M</span>E
          </span>
          <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto"></div>
        </h2>

        <div className="bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col md:flex-row md:items-start">
          {/* Image Section */}
          <motion.div
            className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-10 flex-shrink-0 mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/media/images/swapnik1 image.jpg`}
              alt="Varala Nandu Swapnik"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          {/* Text Section */}
          <div className="text-gray-300 text-center md:text-left flex-1">
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm <strong className="text-white">Varala Nandu Swapnik</strong>, a final-year B.Tech student in Metallurgical and Materials Engineering with a minor in Computer Science from{' '}
              <a
                href="https://www.iitkgp.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                IIT Kharagpur
              </a>. My passion lies at the intersection of materials science and artificial intelligence. I thrive on exploring innovative solutions to complex problems and have a strong background in AI applications across various domains.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With a keen interest in machine learning and data science, I have worked on several projects involving computer vision and natural language processing. I am particularly fascinated by how AI can be leveraged to advance research in materials engineering, and I aim to contribute significantly to this emerging field.
            </p>
            {/* Research Interests */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Research Interests</h3>
              <ul className="list-disc list-inside space-y-2 md:columns-2 md:gap-8">
                {researchInterests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Skills</h3>
              {/* Iterate over each category */}
              {skillsData.map((category, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-gray-300">{category.category}</h4>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
