// src/components/Projects/Projects.js

import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Semantic Segmentation for Self-Driving Cars',
      description:
        'Developed a semantic segmentation model to improve object detection and scene understanding in autonomous vehicles.',
      imageUrl: `${process.env.PUBLIC_URL}/media/computer vision.jpg`,
      role: 'Research Intern at IIT Hyderabad',
      projectLink: 'https://example.com/semantic-segmentation',
    },
    {
      id: 2,
      title: 'Automatic Resource Sequencing for E-Learning',
      description:
        'Created an NLP model to sequence educational resources based on learning objectives and student profiles.',
      imageUrl: `${process.env.PUBLIC_URL}/media/computer vision.jpg`,
      role: 'Research Intern at IIT Kharagpur',
      projectLink: 'https://example.com/automatic-resource-sequencing',
    },
    {
      id: 3,
      title: 'CodeVerse: Cross-Platform Coding Question Search Engine',
      description:
        'Developed a search engine to help programmers find coding questions across various platforms efficiently.',
      imageUrl: `${process.env.PUBLIC_URL}/media/computer vision.jpg`,
      role: 'Personal Project',
      projectLink: 'https://github.com/your-github-username/codeverse',
    },
    {
      id: 4,
      title: 'Gesture Controlled System',
      description:
        'Implemented a system using OpenCV to control keyboard keys and volume through hand gestures.',
      imageUrl: `${process.env.PUBLIC_URL}/media/computer vision.jpg`,
      role: 'Academic Project',
      projectLink: 'https://github.com/your-github-username/gesture-control',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-800 px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
        <span className="mr-2">
          <span className="text-5xl text-blue-500 font-extrabold">P</span>ROJECTS
        </span>
        <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto"></div>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.role}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
