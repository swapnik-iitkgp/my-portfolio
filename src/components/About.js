// About.js
import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/media/swapnik1 image.jpg`} alt="Swapnik" className="profile-image" />
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            I am a final year B.Tech student in Metallurgical and Materials Engineering with a minor in Computer Science from IIT Kharagpur. I have a keen interest in AI and applications, backed by significant project experience in various fields.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
