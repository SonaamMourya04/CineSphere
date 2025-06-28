
import React from 'react';
import { useSelector } from 'react-redux';
import lang from  './languageConstants..js';


const GptSearchBar = () => {
  const langkey = useSelector((state) => state.config?.lang) || "en"; // Get the config state from Redux store with fallback

  return (
    <div className="flex justify-center pt-[8%] px-4">
      <div className="w-full max-w-4xl">
        <form className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-2 hover:bg-white/15 transition-all duration-300">
          <input
            type="text"
            className="flex-1 bg-transparent text-white placeholder-gray-300 px-6 py-4 text-lg focus:outline-none focus:ring-0"
            placeholder={lang[langkey]?.gptSearchPlaceholder || "What would you like to watch?"}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>{lang[langkey]?.search || "Search"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
