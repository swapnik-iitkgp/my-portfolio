import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const BioContent = styled.div`
  flex: 1;
`;

const About = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <ProfileImage src="/assets/images/profile.jpg" alt="Researcher's profile" />
        <BioContent>
          <h2>Dr. [Your Name]</h2>
          <p>[Your current position and affiliation]</p>
          <p>
            I am a passionate researcher specializing in [your main research area]. 
            My work focuses on [brief description of your research interests and goals].
          </p>
          <p>
            With [X] years of experience in the field, I have contributed to 
            [mention any significant contributions or breakthroughs]. My research 
            aims to [explain the potential impact or applications of your work].
          </p>
          <p>
            I received my Ph.D. in [Field] from [University] in [Year], where I 
            [mention any notable achievements during your doctoral studies].
          </p>
        </BioContent>
      </AboutContent>
    </Section>
  );
};

export default About;
