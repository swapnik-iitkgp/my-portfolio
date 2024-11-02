import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
  background: ${({ theme }) => theme.background === '#ffffff' ? '#f9f9f9' : '#1e1e1e'};
  transition: background 0.5s ease;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InternshipCard = styled.div`
  background: ${({ theme }) => theme.background === '#ffffff' ? '#ffffff' : '#2c2c2c'};
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const InternshipTitle = styled.h3`
  margin-bottom: 10px;
`;

const InternshipDetails = styled.p`
  margin: 5px 0;
`;

function Internships() {
  return (
    <Section id="internships">
      <Title>Internships</Title>
      
      <InternshipCard>
        <InternshipTitle>AI Research Intern | Nanyang Technological University (NTU)</InternshipTitle>
        <InternshipDetails><strong>Jul'24 - Present</strong></InternshipDetails>
        <InternshipDetails><strong>Objective:</strong> To develop a model for Low-Resource Multimodal Depression Detection</InternshipDetails>
        <InternshipDetails><strong>Principal Guide:</strong> Dr. Eng-Siong Chng</InternshipDetails>
        <InternshipDetails>
          Prompted Qwen2-Audio and Fine-tuned Qwen-Audio ALM using QLoRA on the DAIC-WOZ dataset for detecting depression in the participant's speech.
          Employed LSTM for depression detection, Fine-tuned wav2vec 2.0 for feature extraction, after non-speech segment removal and audio normalization.
        </InternshipDetails>
      </InternshipCard>

      <InternshipCard>
        <InternshipTitle>Machine Learning Research Intern | Security and AI (SAI) Lab</InternshipTitle>
        <InternshipDetails><strong>Aug'24 - Sept'24</strong></InternshipDetails>
        <InternshipDetails><strong>Objective:</strong> To develop an Adaptive Reparameterization Technique to address Data Heterogeneity</InternshipDetails>
        <InternshipDetails><strong>Principal Guide:</strong> Mr. Krishna Yadav</InternshipDetails>
        <InternshipDetails>
          Experimented with static model aggregation algorithms such as FedAvg and FedProx for intrusion detection on the CICIDS 2017 dataset.
          Developed an adaptive reparameterization algorithm to detect highly malicious classes like Heartbleed, SQL Injection in heterogeneous conditions.
        </InternshipDetails>
      </InternshipCard>

      {/* Repeat InternshipCard for other internships */}

    </Section>
  );
}

export default Internships;
