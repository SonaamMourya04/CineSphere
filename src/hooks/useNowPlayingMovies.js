import { API_OPTIONS } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from "../utils/MovieSlice";
import React, { useEffect } from 'react';

// fetch data from TMDB API and update store
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowplayingMovies);


  const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
     
      dispatch(addNowPlayingMovies(json.results));
    };
  useEffect(() => {
if(!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
