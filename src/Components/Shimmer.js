import React from 'react';

// Main Video Shimmer for hero section
export const VideoShimmer = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 animate-pulse">
      {/* Video background shimmer */}
      <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
      
      {/* Video title shimmer overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-3 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-r from-black via-black/70 to-transparent z-10">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          {/* Title shimmer */}
          <div className="h-8 sm:h-10 md:h-12 lg:h-16 bg-gray-600 rounded-lg mb-3 sm:mb-4 md:mb-6 w-3/4"></div>
          
          {/* Description shimmer */}
          <div className="space-y-2 mb-4 sm:mb-6 md:mb-8">
            <div className="h-4 sm:h-5 md:h-6 bg-gray-600 rounded w-full"></div>
            <div className="h-4 sm:h-5 md:h-6 bg-gray-600 rounded w-5/6"></div>
            <div className="h-4 sm:h-5 md:h-6 bg-gray-600 rounded w-2/3"></div>
          </div>

          {/* Buttons shimmer */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
            <div className="h-12 sm:h-14 md:h-16 bg-gray-600 rounded-lg w-32 sm:w-36 md:w-40"></div>
            <div className="h-12 sm:h-14 md:h-16 bg-gray-600 rounded-lg w-36 sm:w-40 md:w-44"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Movie Card Shimmer
export const MovieCardShimmer = () => {
  return (
    <div className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 flex-shrink-0 pr-2 sm:pr-3 md:pr-4">
      <div className="relative w-full h-36 sm:h-42 md:h-48 lg:h-54 xl:h-60 bg-gray-700 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
};

// Movie List Shimmer
export const MovieListShimmer = ({ title }) => {
  return (
    <div className="px-3 sm:px-6 bg-black">
      {/* Title shimmer */}
      <div className="py-2 sm:py-3">
        <div className="h-6 sm:h-7 md:h-8 bg-gray-700 rounded w-48 animate-pulse"></div>
      </div>
      
      {/* Movie cards shimmer - reduced for faster rendering */}
      <div className="flex overflow-x-auto scrollbar-hide pb-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
          {[...Array(4)].map((_, index) => (
            <MovieCardShimmer key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Secondary Container Shimmer
export const SecondaryContainerShimmer = () => {
  return (
    <div className="bg-black">
      <div className="-mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 relative z-20 pl-2 sm:pl-4 md:pl-8 lg:pl-12">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <MovieListShimmer title="Now Playing" />
          <MovieListShimmer title="Popular" />
        </div>
      </div>
    </div>
  );
};

// GPT Search Shimmer
export const GptSearchShimmer = () => {
  return (
    <div className="p-2 sm:p-4 m-2 sm:m-4 bg-black bg-opacity-90 text-white rounded-lg">
      <div className="max-w-7xl mx-auto">
        {/* Header shimmer */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="relative h-8 sm:h-10 md:h-12 bg-gray-700 rounded w-80 mx-auto mb-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer"></div>
          </div>
          <div className="relative h-4 sm:h-5 bg-gray-700 rounded w-96 mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* AI Processing Animation */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 rounded-full">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></div>
            </div>
            <span className="text-white text-sm font-medium">AI is finding perfect movies...</span>
          </div>
        </div>

        {/* Movie suggestions shimmer */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 backdrop-blur-sm border border-gray-700/50">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-700 rounded-full mr-2 sm:mr-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer"></div>
                </div>
                <div className="relative h-5 sm:h-6 md:h-7 bg-gray-700 rounded w-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer"></div>
                </div>
              </div>

              {/* Movie cards shimmer */}
              <div className="flex space-x-2 sm:space-x-3 md:space-x-4 overflow-hidden">
                {[...Array(5)].map((_, cardIndex) => (
                  <MovieCardShimmer key={cardIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Loading message */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-400 text-sm sm:text-base animate-pulse">
            🎬 Analyzing your preferences and fetching movie data...
          </p>
        </div>
      </div>
    </div>
  );
};

// AI Processing Shimmer (when AI is thinking)
export const GptProcessingShimmer = () => {
  return (
    <div className="p-2 sm:p-4 m-2 sm:m-4 bg-black bg-opacity-90 text-white rounded-lg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-1 sm:mb-2">
            🎬 AI Movie Recommendations
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg px-2">
            Discover your next favorite movie with our AI-powered suggestions
          </p>
        </div>

        {/* AI Processing Animation */}
        <div className="text-center py-12 sm:py-16 md:py-20">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full shadow-lg">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
              </div>
              <span className="text-white text-sm sm:text-base font-medium">AI is analyzing your request...</span>
            </div>
          </div>

          {/* Processing steps */}
          <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-400 text-sm sm:text-base">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>Understanding your preferences...</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400 text-sm sm:text-base">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-300"></div>
              <span>Searching movie database...</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400 text-sm sm:text-base">
              <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse delay-500"></div>
              <span>Preparing recommendations...</span>
            </div>
          </div>

          {/* Estimated time */}
          <div className="mt-8 text-gray-500 text-xs sm:text-sm">
            This usually takes 3-5 seconds
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Container Shimmer (combines video and secondary)
export const MainContainerShimmer = () => {
  return (
    <div>
      <VideoShimmer />
      <SecondaryContainerShimmer />
    </div>
  );
};
