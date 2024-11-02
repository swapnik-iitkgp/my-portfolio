import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  // const { isDark } = useTheme();

  const stats = [
    { label: 'Publications', value: '15+', icon: '📚' },
    { label: 'Citations', value: '200+', icon: '📄' },
    { label: 'Awards', value: '5', icon: '🏆' },
    { label: 'Projects', value: '10+', icon: '🔬' },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <div className="relative inline-block mb-8">
              <img
                src="/assets/images/swapnik2.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-blue-600/10 dark:bg-blue-400/10 animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Varala Nandu Swapnik
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Ph.D. Researcher in Metallurgical and Materials Engineering
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Indian Institute of Technology, Kharagpur • Materials AI Lab
            </p>
          </motion.div>

          {/* Research Focus */}
          <motion.div
            className="mb-16"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Research Focus
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My research lies at the intersection of Materials Science and Artificial Intelligence,
                focusing on developing novel computational methods for materials discovery and optimization.
                I specialize in applying machine learning techniques to predict material properties and
                accelerate the development of next-generation materials for sustainable energy applications.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-16 text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
                View Publications
              </button>
              <button className="px-6 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Latest Publications Preview */}
          <motion.div
            className="mt-16"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Latest Publications
              </h2>
              <div className="space-y-4">
                {[1, 2].map((_, index) => (
                  <div 
                    key={index}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                  >
                    <h3 className="font-medium text-gray-800 dark:text-gray-100">
                      Machine Learning Approaches in Materials Science
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Published in Journal of Materials Research • 2024
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  );
};

export default Home;