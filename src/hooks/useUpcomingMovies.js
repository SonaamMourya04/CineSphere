import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from "../utils/MovieSlice";
import { useEffect } from 'react';

// Hook to fetch upcoming movies and update Redux store
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };

    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
