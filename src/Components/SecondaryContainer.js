import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    if (!movies || !movies.nowplayingMovies) return null;

    return (
        <div className="bg-black">
            <div className="-mt-20 relative z-20 pl-4 md:pl-12">
                <MovieList title={"Now Playing"} movies={movies.nowplayingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            </div>
        </div>
    );
}

export default SecondaryContainer;
