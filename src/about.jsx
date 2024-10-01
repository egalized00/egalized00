// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../public/egal.jpg'; // Replace with your image path

const About = () => {
  return (
    <div id="about" className="h-screen bg-gray-900 text-white flex justify-center items-center px-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-left md:w-1/2"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl mb-4">
          I am a bilingual software developer with a passion for building web applications and solving complex problems.
        </p>
        <p className="text-lg md:text-xl mb-4">
          With a background in computer science and experience in various technologies, I strive to create meaningful and impactful software solutions.
        </p>
        <p className="text-lg md:text-xl">
          I enjoy learning new things, working on challenging projects, and contributing to the tech community.
        </p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default About;
