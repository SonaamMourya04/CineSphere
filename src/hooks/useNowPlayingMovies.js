import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowplayingMovies);

  const fetchNowPlaying = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (err) {
      console.error("Error fetching now playing movies:", err);
    }
  };

  useEffect(() => {
    if (!nowPlaying) fetchNowPlaying();
  }, [nowPlaying]);
};

export default useNowPlayingMovies;
