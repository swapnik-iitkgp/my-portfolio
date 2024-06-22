import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Computer Vision Research',
      description: 'Developed a Semantic Segmentation model for self-driving cars at IIT Hyderabad.',
    },
    {
      title: 'NLP Research',
      description: 'Developed a model for automatic resource sequencing for e-learning at IIT Kharagpur.',
    },
    {
      title: 'CodeVerse',
      description: 'Developed a cross-platform coding question search engine.',
    },
    {
      title: 'Gesture Controlled System',
      description: 'Created a gesture-based control system for keys and volume using OpenCV.',
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;