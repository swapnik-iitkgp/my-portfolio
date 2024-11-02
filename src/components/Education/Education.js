import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import motion

// Define AnimatedTitle using styled-components and framer-motion
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.color};
  }

  th {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.background};
  }
`;

const educationData = [
  {
    year: '2025',
    degree: 'B.TECH',
    institute: 'IIT Kharagpur',
    cgpa: '8.20 / 10',
  },
  {
    year: '2021',
    degree: 'Class XII, TSBIE',
    institute: 'Sri Chaitanya Junior Kalasala',
    cgpa: '98.4%',
  },
  {
    year: '2019',
    degree: 'Class X, TSBSE',
    institute: 'Akshara Concept School',
    cgpa: '9.3 / 10',
  },
];

function Education() {
  return (
    <Section id="education">
      <AnimatedTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education
      </AnimatedTitle>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Degree/Exam</th>
              <th>Institute</th>
              <th>CGPA/Marks</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <tr key={index}>
                <td>{edu.year}</td>
                <td>{edu.degree}</td>
                <td>{edu.institute}</td>
                <td>{edu.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Section>
  );
}

export default Education;
