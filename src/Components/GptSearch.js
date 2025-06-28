import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { GPT_THEME } from '../utils/Constants';

const GptSearch = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src={GPT_THEME}
        className="absolute w-full h-full object-cover"
        alt="background"
      />

      {/* Optional black overlay for better contrast */}
      <div className="absolute w-full h-full bg-black opacity-50"></div>

      {/* Content stacked on top */}
      <div className="absolute top-0 w-full h-full">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
