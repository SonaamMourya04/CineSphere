import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 inset-0">
        <img
          className="h-full w-full object-cover"
          src="YOUR_BG_IMAGE_URL"
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </>
  );
};

export default GptSearch;