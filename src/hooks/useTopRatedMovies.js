import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from "../utils/MovieSlice"; // You should have this action in your MovieSlice
import { useEffect } from 'react';

// fetch data from TMDB API and update store
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);

        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }

        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));

      } catch (error) {
        console.error('Error fetching top rated movies:', error);
        // Optionally dispatch an error action or show fallback data
      }
    };

    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
