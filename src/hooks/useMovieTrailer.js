import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/MovieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const filtered = json.results?.filter((v) => v.type === "Trailer");
      const trailer = filtered?.length ? filtered[0] : json.results?.[0];

      if (trailer) dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.error("Failed to fetch trailer:", err);
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;
