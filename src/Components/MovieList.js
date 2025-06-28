import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  
    if (!movies || movies.length === 0) return null; // prevent crash

    return (
        <div className="px-6 bg-black">
            <h1 className="text-2xl py-2 text-white ">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;