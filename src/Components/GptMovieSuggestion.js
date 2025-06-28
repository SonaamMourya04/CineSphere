import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt)

  console.log("🎬 GptMovieSuggestion Debug:");
  console.log("movieNames:", movieNames);
  console.log("movieResults:", movieResults);

  if (!movieNames) return null

  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white rounded-lg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-2">
            🎬 AI Movie Recommendations
          </h2>
          <p className="text-gray-300 text-lg">
            Discover your next favorite movie with our AI-powered suggestions
          </p>
        </div>

        {/* Movie Suggestions */}
        <div className="space-y-8">
          {movieNames.map((movieName, index) => (
            <div key={movieName} className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {movieName}
                </h3>
              </div>

              {movieResults[index] && (
                <MovieList
                  title=""
                  movies={movieResults[index]}
                />
              )}
            </div>
          ))}
        </div>

        {/* Loading State */}
        {movieNames.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-4 h-4 bg-red-300 rounded-full animate-bounce delay-150"></div>
            </div>
            <p className="text-gray-400 mt-4">Searching for amazing movies...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GptMovieSuggestion;