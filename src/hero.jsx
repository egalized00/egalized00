// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-8 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500 mb-4">
          Ibrahim Egal
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500 mb-8">
          Software Developer
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          I am a bilingual software developer with a passion for building web applications and solving complex problems.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <a
            href="#about"
            className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md shadow hover:bg-blue-600 hover:cursor-pointer ease-in-out hover:-translate-y-1  hover:-translate-y-1  transition duration-300"
          >
            About Me
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
