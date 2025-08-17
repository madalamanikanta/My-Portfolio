import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Portfolio</div>
        <div className="space-x-4">
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition duration-300">About</button>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition duration-300">Projects</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition duration-300">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;