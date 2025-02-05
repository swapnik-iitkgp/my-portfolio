// src/components/News/News.js

import React from 'react';

// Merged data for a single timeline
// const newsData = [
//   {
//     date: "Jun '24",
//     title: "Manuscript on Adaptive Dynamics Optimization for Autonomous Driving submitted to",
//     link: "https://corl2024.org",
//     linkText: "CoRL 2024",
//   },
  // {
  //   date: "May '24",
  //   title: "Work on Entity Augmentation for Vertical Federated Learning accepted at the GLOW Workshop at",
  //   link: "https://ijcai2024.org",
  //   linkText: "IJCAI 2024",
  // // },
  // {
  //   date: "Dec '23",
  //   title: "Secured 1st position at the Inter IIT Tech Meet 2023 in the event 'Adobe Behavior Simulation Challenge'.",
  // },
  {
    date: "Apr '23",
    title: "Selected as a Research Intern at IIT Hyderabad",
    description: "I was selected for a research internship focusing on semantic segmentation in autonomous vehicles.",
  },
  {
    date: "Feb '23",
    title: "Selected as a Research Intern at IIT Kharagpur",
    description: "I was selected for a research internship focusing on automatic resource sequencing for e-learning.",
  },
  // {
  //   date: "Feb '23",
  //   title: "Paper Accepted at IEEE Conference",
  //   description: "My research on NLP resource sequencing for e-learning was accepted at the IEEE Conference on Learning Technologies.",
  // },
  // {
  //   date: "Jun '22",
  //   title: "Awarded Best Project at University Science Fair",
  //   description: "Received the Best Project award for my gesture-controlled system development project.",
  // },
  // Add more items as needed
];

const News = () => {
  return (
    <section id="news" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
          <span className="mr-2">
            <span className="text-5xl text-blue-500 font-extrabold">L</span>ATEST
          </span>
          <span className="mr-2">
            <span className="text-5xl text-red-500 font-extrabold">N</span>EWS
          </span>
          <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto"></div>
        </h2>
        
        {/* Unified Timeline */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg relative">
          {/* Vertical timeline line */}
          <div className="absolute left-10 top-0 h-full border-l-2 border-gray-700"></div>
          
          {/* Timeline items */}
          <div className="space-y-8">
            {newsData.map((news, index) => (
              <div key={index} className="flex items-start space-x-4 relative">
                {/* Timeline Dot */}
                <div className="relative z-10 mt-1">
                  <span className="w-4 h-4 bg-blue-500 rounded-full block border-2 border-gray-800"></span>
                </div>

                {/* Date and Content */}
                <div className="pl-4">
                  <p className="text-gray-400 text-sm font-semibold mb-1">{news.date}</p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">{news.title}</strong>{' '}
                    {news.link && (
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-500"
                      >
                        {news.linkText}
                      </a>
                    )}
                  </p>
                  {news.description && <p className="text-gray-300 text-sm mt-2">{news.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
