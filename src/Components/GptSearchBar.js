
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from  './languageConstants..js';
import ai from '../utils/Gemini';
import { API_OPTIONS } from '../utils/Constants'; // Import the API options from Constants.js
import { addGptMovies } from '../utils/gptSlice';



const GptSearchBar = () => {
  const dispatch=useDispatch();
  const langkey = useSelector((state) => state.config?.lang) || "en"; // Get the config state from Redux store with fallback
 const searchText=useRef(null);

 //movie search in tmdb

 const searchMovieTMDB = async (movie) => {
   try {
     console.log(`🔍 Searching TMDB for: ${movie}`);
     const url = 'https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(movie) + '&include_adult=false&language=en-US&page=1';
     console.log(` TMDB URL: ${url}`);
     console.log(` API Options:`, API_OPTIONS);

     const data = await fetch(url, API_OPTIONS);
     console.log(` TMDB Response status: ${data.status}`);

     if (!data.ok) {
       const errorText = await data.text();
       console.error(` TMDB API Error Response:`, errorText);
       throw new Error(`TMDB API error: ${data.status} ${data.statusText}`);
     }

     const json = await data.json();
     console.log(` TMDB results for "${movie}":`, json.results?.length || 0, "movies found");
     return json.results || [];
   } catch (error) {
     console.error(` Error searching TMDB for "${movie}":`, error);
     return []; // Return empty array on error
   }
 }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    if (!searchText.current.value.trim()) {
      alert("Please enter a search query");
      return;
    }

    const gptQuery = "Act as movie recommendation system and suggest some movies for query: "
      + searchText.current.value +
      ". Give me names of 5 movies, comma separated like the example result: gadar,sholay,don,golmaal,koi mil gaya";

    try {
      console.log(" Step 1: Calling Gemini AI...");
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: gptQuery,
      });
      const text = response.text;
      console.log("Gemini response:", text);

      // Convert comma-separated string to array and clean up
      const gptMovies = text.split(',').map(movie => movie.trim());
      console.log("🎬 Movie recommendations:", gptMovies);

      console.log("🔍 Step 2: Searching TMDB for each movie...");
      // Search each movie in TMDB
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log("TMDB Results:", tmdbResults);

      console.log("💾 Step 3: Storing in Redux...");
      dispatch(addGptMovies({movieNames: gptMovies, movieResults: tmdbResults}));
      console.log(" Successfully stored movie data!");

    } catch (error) {
      console.error(" Error details:", error);
      console.error(" Error message:", error.message);
      console.error("Error stack:", error.stack);
      alert(`Failed to get movie recommendations: ${error.message}`);
    }

  }

  return (
    <div className="flex justify-center pt-[8%] px-4">
      <div className="w-full max-w-4xl">
        <form className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-2 hover:bg-white/15 transition-all duration-300 " 
        onSubmit={(e) => e.preventDefault()}>
          <input
          ref={searchText}    
            type="text"
            className="flex-1 bg-transparent text-white placeholder-gray-300 px-6 py-4 text-lg focus:outline-none focus:ring-0"
            placeholder={lang[langkey]?.gptSearchPlaceholder || "What would you like to watch?"}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          onClick={handleGptSearchClick}
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

