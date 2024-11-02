import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px; /* Restrict the width for better alignment */
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  max-width: 350px;
  text-align: left;
  color: ${props => props.theme.text};
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.text};
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.text};
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: ${props => props.theme.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data:", formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactContent>
        <ContactInfo>
          <h3>Get in Touch</h3>
          <p>
            I'm always open to research collaborations, speaking engagements, 
            or discussions about my work. Feel free to reach out!
          </p>
          <p>Email: your.email@university.edu</p>
          <p>Office: [Your office location]</p>
          <p>
            [Your University/Institution Name]<br />
            [Department]<br />
            [Address]
          </p>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit} aria-label="Contact Form">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            aria-label="Your name"
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            aria-label="Your email address"
          />
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            aria-label="Subject of your message"
          />
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Message"
            required
            aria-label="Message content"
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
          {submitted && <p style={{ color: 'green' }}>Thank you! Your message has been sent.</p>}
        </ContactForm>
      </ContactContent>
    </Section>
  );
};

export default Contact;
