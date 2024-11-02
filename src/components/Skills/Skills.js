import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import motion

const AnimatedTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

function Skills() {
  return (
    <Section id="skills">
      <AnimatedTitle
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Skills and Expertise
      </AnimatedTitle>
      <Content>
        <p>
          <strong>Programming Languages:</strong> C, C++, Python, SQL, MATLAB, HTML, CSS, JavaScript, Solidity<br />
          <strong>Libraries and Frameworks:</strong> NumPy, Pandas, Matplotlib, React.js, TensorFlow, PyTorch, scikit-learn, OpenCV, NetworkX, NLTK, Seaborn<br />
          <strong>Softwares and Tools:</strong> AWS, Git, MATLAB, Google Colab, VSCode, Cloud Compare, Mesh Lab, PyCharm, Revit, Postman, Docker, Remix
        </p>
      </Content>
    </Section>
  );
}

export default Skills;
