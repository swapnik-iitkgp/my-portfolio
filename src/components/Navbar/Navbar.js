import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  
  const navLinks = [
    { to: 'home', label: 'Home', icon: '🏠' },
    { to: 'about', label: 'About', icon: '👤' },
    { to: 'education', label: 'Education', icon: '🎓' },
    { to: 'internships', label: 'Internships', icon: '💼' },
    { to: 'projects', label: 'Projects', icon: '🔬' },
    { to: 'skills', label: 'Skills', icon: '⚡' },
    { to: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <motion.nav 
      className="fixed w-full bg-white dark:bg-gray-800 shadow-md backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Rest of the navbar code remains the same */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center justify-start">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">NS</span>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  <span className="mr-2">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-end">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 group relative"
              aria-label="Toggle theme"
            >
              <motion.span 
                className={`text-xl absolute ${isDark ? 'opacity-100' : 'opacity-0'}`}
                initial={false}
                animate={{ rotate: isDark ? 0 : 180, opacity: isDark ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ☀️
              </motion.span>
              <motion.span 
                className={`text-xl absolute ${!isDark ? 'opacity-100' : 'opacity-0'}`}
                initial={false}
                animate={{ rotate: !isDark ? 0 : -180, opacity: !isDark ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                🌙
              </motion.span>
              <span className="text-xl invisible">🌙</span>
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                <span className="mr-2">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;