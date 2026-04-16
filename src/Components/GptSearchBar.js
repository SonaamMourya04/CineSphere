import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import ai from "../utils/Gemini";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("TMDB fetch failed:", error);
      return [];
    }
  };

  const handleGptSearch = async () => {
    const userInput = searchRef.current.value;
    if (!userInput) return;

    const prompt = `Act as a movie recommendation system and suggest some movies for the query: "${userInput}". Only give me names of 5 movies, comma separated like: Don, Gadar, Sholay, Dangal, Koi Mil Gaya`;

    try {
      const result = await ai.generateContent(prompt);
      const responseText = await result.response.text();

      const movieNames = responseText.split(",").map((name) => name.trim());
      const movieResults = await Promise.all(
        movieNames.map((movie) => searchMovieTMDB(movie))
      );

      dispatch(addGptMovies({ movieNames, movieResults }));
    } catch (error) {
      console.error("GPT request failed:", error);
    }
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey]?.gptSearchPlaceholder || "Search movies..."}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
