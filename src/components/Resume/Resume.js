// src/components/Resume.js

import React from 'react';

const Resume = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Resume
      </h2>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <iframe
          title="Resume PDF"
          className="w-full h-screen"
          src={`${process.env.PUBLIC_URL}/media/Swapnik Resume.pdf`}
          frameBorder="0"
        />
      </div>
    </section>
  );
};

export default Resume;
