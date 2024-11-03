// src/components/Experience/Experience.js

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

// Sample data for experiences
const experienceData = [
  {
    id: 1,
    title: 'Semantic Segmentation Research Intern',
    organization: 'Indian Institute of Technology, Hyderabad',
    organizationLogo: `${process.env.PUBLIC_URL}/media/images/iit_hyd.jpg`,
    duration: 'April 2023 - July 2023',
    location: 'Hyderabad, India',
    description: [
      'Developed a semantic segmentation model to enhance object detection and scene understanding in autonomous vehicles.',
      'Collaborated with a team of researchers to implement and optimize deep learning algorithms using TensorFlow and OpenCV.',
      'Conducted extensive data preprocessing and augmentation to improve model accuracy and robustness.',
    ],
    technologies: [],
    projectImage: `${process.env.PUBLIC_URL}/media/nlp.jpg`,
    projectLink: 'https://example.com/semantic-segmentation',
    logoColor: 'white',
  },
  {
    id: 2,
    title: 'NLP Research Intern',
    organization: 'Indian Institute of Technology, Kharagpur',
    organizationLogo: `${process.env.PUBLIC_URL}/media/images/iit_kgp.jpg`,
    duration: 'February 2023 - April 2023',
    location: 'Kharagpur, India',
    description: [
      'Worked on an NLP project aimed at automatic resource sequencing for e-learning platforms.',
      'Implemented machine learning models to analyze and organize educational content based on learning objectives and student performance data.',
      'Utilized NLTK and PyTorch to develop and fine-tune language models for improved content recommendation.',
    ],
    technologies: ['Python', 'PyTorch', 'NLTK', 'Scikit-learn'],
    projectImage: `${process.env.PUBLIC_URL}/media/nlp_project.jpg`,
    projectLink: 'https://example.com/nlp-resource-sequencing',
    logoColor: 'white',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    organization: 'CodeVerse',
    organizationLogo: `${process.env.PUBLIC_URL}/media/codeverse_logo.svg`,
    duration: 'June 2022 - August 2022',
    location: 'Remote',
    description: [
      'Developed a cross-platform coding question search engine to help programmers find relevant questions across various coding platforms efficiently.',
      'Enhanced user interface and experience using React and integrated backend APIs for efficient data retrieval.',
      'Implemented responsive design principles to ensure seamless functionality across devices.',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Express'],
    projectImage: `${process.env.PUBLIC_URL}/media/codeverse_project.jpg`,
    projectLink: 'https://github.com/your-github-username/codeverse',
    logoColor: 'white',
  },
  {
    id: 4,
    title: 'Gesture Controlled System Developer',
    organization: 'Academic Project',
    organizationLogo: `${process.env.PUBLIC_URL}/media/gesture_control_logo.svg`,
    duration: 'September 2021 - December 2021',
    location: 'Kharagpur, India',
    description: [
      'Implemented a gesture-based control system using OpenCV to manage keyboard inputs and volume control.',
      'Designed and trained computer vision models to accurately detect and interpret hand gestures in real-time.',
      'Integrated the system with desktop applications to demonstrate practical utility.',
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow'],
    projectImage: `${process.env.PUBLIC_URL}/media/gesture_control_project.jpg`,
    projectLink: 'https://github.com/your-github-username/gesture-control',
    logoColor: 'white',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-800 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
          <span className="mr-2">
            <span className="text-5xl text-blue-500 font-extrabold">E</span>XPERIENCE
          </span>
          <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto"></div>
        </h2>
        <div className="space-y-12">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              className="flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="md:w-1/4 w-full flex items-center justify-center p-4">
                <div className="w-64 h-64">
                  <img
                    src={exp.projectImage}
                    alt={`${exp.title} Project`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Experience Details */}
              <div className="md:w-3/4 w-full p-6 relative">
                {/* Organization Logo with Border */}
                <div className="absolute top-6 right-6">
                  <div className="w-24 h-24 bg-white flex items-center justify-center rounded-lg border-0 border-blue-500 shadow-lg">
                    <img
                      src={exp.organizationLogo}
                      alt={`${exp.organization} Logo`}
                      className={clsx('w-20 h-20 object-contain p-1')}
                    />
                  </div>
                </div>

                {/* Title and Organization */}
                <div className="pr-20">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{exp.title}</h3>
                  <h4 className="text-xl text-blue-400 mb-1">{exp.organization}</h4>

                  {/* Duration, Location, and Project Link */}
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
                    <p>{exp.duration}</p>
                    <span className="border-r border-gray-700 h-4 hidden sm:inline-block"></span>
                    <p>{exp.location}</p>

                    {/* Project Link */}
                    {exp.projectLink && (
                      <a
                        href={exp.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:ml-auto mt-2 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-4" />

                {/* Description with Bullet Points */}
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;