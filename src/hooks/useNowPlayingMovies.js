import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../utils/MovieSlice";
import React, { useEffect } from 'react';

// fetch data from TMDB API and update store
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
     
      dispatch(addNowPlayingMovies(json.results));
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
