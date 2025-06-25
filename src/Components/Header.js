// Components/Header.js
import React from 'react';
import { PlayCircle } from 'lucide-react'; // round icon

const Header = () => {
  return (
    <header className="absolute text-white px-6 py-4 flex justify-between items-center z-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 text-red-600 font-extrabold text-2xl sm:text-3xl tracking-wide">
        <PlayCircle className="w-8 h-8 text-red-600" />
        <span>Cine<span className="text-white">Sphere</span></span>
      </div>
    </header>
    
  );
};

export default Header;
