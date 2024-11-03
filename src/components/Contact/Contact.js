import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaGoogle, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
            <span className="mr-2">
              <span className="text-5xl text-blue-500 font-extrabold">L</span>ET'S
            </span>
            <span className="mr-2">
              <span className="text-5xl text-red-500 font-extrabold">C</span>ONNECT
            </span>
            <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto"></div>
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            I'm open to collaborations, new opportunities, or just connecting! Feel free to reach out through any of the platforms below.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* Contact Platforms */}
            {[
              {
                href: 'mailto:swapnikvarala@kgpian.iitkgp.ac.in',
                icon: <FaEnvelope className="text-3xl mb-4 text-blue-500" />,
                platform: 'Email',
                info: 'swapnikvarala@kgpian.iitkgp.ac.in',
              },
              {
                href: 'https://www.linkedin.com/in/swapnik-varala/',
                icon: <FaLinkedin className="text-3xl mb-4 text-blue-600" />,
                platform: 'LinkedIn',
                info: 'linkedin.com/in/swapnik-varala',
              },
              {
                href: 'https://github.com/swapnik-iitkgp',
                icon: <FaGithub className="text-3xl mb-4 text-gray-300" />,
                platform: 'GitHub',
                info: 'github.com/swapnik-iitkgp',
              },
              {
                href: 'https://scholar.google.com/citations?user=yourGoogleScholarID',
                icon: <FaGoogle className="text-3xl mb-4 text-red-500" />,
                platform: 'Google Scholar',
                info: 'scholar.google.com',
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-700 transition duration-200 rounded-lg p-6 flex flex-col items-center text-white w-60"
              >
                {contact.icon}
                <p className="font-semibold">{contact.platform}</p>
                <p className="text-sm text-gray-400">{contact.info}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Quote Section */}
        <div className="max-w-4xl mx-auto px-4 py-10 border-b border-gray-700/50">
          <div className="relative">
            <div className="absolute -top-3 left-4 text-blue-500/20">
              <FaQuoteLeft size={32} />
            </div>
            <div className="absolute -bottom-3 right-4 text-blue-500/20">
              <FaQuoteRight size={32} />
            </div>
            <blockquote className="text-center px-8">
              <p className="text-lg md:text-xl font-serif italic text-gray-300 leading-relaxed">
                "The journey of a thousand miles begins with a single step."
              </p>
              <footer className="mt-3 text-gray-400">
                <cite className="text-sm font-medium">- Lao Tzu</cite>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Website crafted by <span className="text-blue-400 font-semibold hover:text-blue-300 cursor-pointer">Swapnik</span>
            </p>
            <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition duration-200">
              Privacy Policy
            </a>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Swapnik Varala. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;