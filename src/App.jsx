// App.jsx
import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import About from './about';

const App = () => {
  return (
    <div className="h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <bob />
    </div>
  );
};

export default App;
