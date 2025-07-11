import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from "../utils/MovieSlice"; // You should have this action in your MovieSlice
import { useEffect } from 'react';

// fetch data from TMDB API and update store
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const json = await data.json();

      dispatch(addTopRatedMovies(json.results));
    };
    getTopRatedMovies(); 
  }, []);
};

export default useTopRatedMovies;
