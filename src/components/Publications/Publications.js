// src/components/Publications/Publications.js

import React from 'react';

const publicationsData = [
  {
    title: "Federated Unlearning via Subparameter Space Partitioning and Selective Freezing",
    journal: "AAAI Workshop on Datasets and Evaluators of AI Safety",
    year: "2025",
    status: "Accepted",
    description: "This paper explores a federated unlearning method to forget few concepts from the clients.",
    link: "https://example.com/publication1",
    image: `${process.env.PUBLIC_URL}/media/images/publication1.jpg`, // Replace with the actual image path
  },
  {
    title: "Adaptive Federated Gradient Reparameterization for Effective Intrusion Detection in Non-IID Settings",
    journal: "NeurIPS Workshop on Adaptive Foundation Models",
    year: "2024",
    status: "Pre-print",
    description: "This paper explores our adpative aggregation method FedGRAA to overcome data heterogeneity.",
    link: "https://example.com/publication1",
    image: `${process.env.PUBLIC_URL}/media/images/publication1.jpg`, // Replace with the actual image path
  },
  // Add more publications as needed
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
          <span className="mr-2">
            <span className="text-5xl text-blue-500 font-extrabold">P</span>UBLICATIONS
          </span>
          <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto"></div>
        </h2>
        
        {/* Publications List */}
        <div className="space-y-6">
          {publicationsData.map((publication, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center"
            >
              {/* Image on the Left */}
              {publication.image && (
                <div className="md:w-1/4 w-full mb-4 md:mb-0 md:mr-6">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-auto rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Publication Details */}
              <div className="md:w-3/4 w-full">
                <h3 className="text-2xl font-semibold text-blue-500 mb-2">{publication.title}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <span>{publication.journal} • {publication.year}</span>
                  
                  {/* Status Button as a Link */}
                  {publication.status && publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`ml-4 px-2 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
                        publication.status === "Published"
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-yellow-500 text-gray-800 hover:bg-yellow-600"
                      }`}
                    >
                      {publication.status}
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{publication.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
