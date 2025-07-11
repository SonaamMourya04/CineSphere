import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from "../utils/MovieSlice";
import { useEffect } from 'react';

// fetch data from TMDB API and update store
const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const json = await data.json();
     
      dispatch(addPopularMovies(json.results));
    };
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
