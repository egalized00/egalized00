// Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Initials on the Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-lg font-bold"
        >
        <a
            href="hero"
            className="inline-block mt-4 px-6 py-3  text-white text-lg font-semibold rounded-md shadow hover:bg-blue-600 hover:cursor-pointer ease-in-out hover:-translate-y-1  hover:-translate-y-1  transition duration-300"
          >
            IE
            </a>
        </motion.div>

        {/* Links on the Right */}
        <div className="flex space-x-6 text-white">
          <motion.a
            href="https://www.linkedin.com/in/ibrahim-egal-188b76206/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/egalized00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaGithub size={24} />
          </motion.a>
         
          <motion.a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaTwitter size={24} />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
