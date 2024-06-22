import React from 'react';
import './Experience.css';
import Button from './Button'; // Import the Button component
import './Button.css';

const experienceItems = [
  {
    id: 1,
    title: 'Computer Vision Research Intern',
    organization: 'IIT Hyderabad',
    date: "Apr'23 to July'23",
    description: 'Developed a Semantic Segmentation model for self-driving cars.',
    imageUrl: `${process.env.PUBLIC_URL}/media/computer vision.jpg`,
    buttons: [
      { text: 'View Details', url: 'https://example.com/project1' },
      { text: 'Download Report', url: 'https://example.com/report1.pdf' }
    ]
  },
  {
    id: 2,
    title: 'NLP Research Intern',
    organization: 'IIT Kharagpur',
    date: "Feb'23 to Apr'23",
    description: 'Worked on automatic resource sequencing for e-learning.',
    imageUrl: `${process.env.PUBLIC_URL}/media/nlp.jpg`,
    buttons: [
      { text: 'View Details', url: 'https://example.com/project2' }
    ]
  }
  // Add more items as needed
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceItems.map(item => (
          <div key={item.id} className="experience-item">
            <div className="experience-content">
              <img src={item.imageUrl} alt={item.title} className="experience-image" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.organization} - {item.date}</p>
                <p>{item.description}</p>
                <div className="experience-buttons">
                  {item.buttons.map((button, index) => (
                    <Button key={index} onClick={() => window.open(button.url, '_blank')}>
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
