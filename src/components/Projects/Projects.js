// src/components/Projects/Projects.js

import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
`;

const AnimatedTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ProjectImage = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function Projects() {
  return (
    <Section id="projects">
      <AnimatedTitle>Projects</AnimatedTitle>
      <Content>
        <ProjectImage
          alt="Sample Project"
          src="/assets/images/sample-project.jpg" // Ensure this path is correct
          effect="blur"
        />
        <p>Details about your projects go here. Use dummy data or the provided information to populate this section.</p>
      </Content>
    </Section>
  );
}

export default Projects;
