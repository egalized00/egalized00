// Experience.jsx
import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="space-y-8 max-w-4xl">
        {Experiences.map((experience,index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{experience.title}</h3>
            <h4 className="text-xl text-gray-400">{experience.company}</h4>
            <p className="text-gray-400">{experience.duration}</p>
            <p className="mt-4">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
