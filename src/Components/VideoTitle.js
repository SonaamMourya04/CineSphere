import { Play, Info } from 'lucide-react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video px-4 sm:px-8 pt-[30%] sm:pt-[20%] text-white bg-gradient-to-b from-black">
      <h1 className="text-2xl  sm:text-4xl font-bold mb-3 sm:mb-4">{title}</h1>
      <p className="text-sm sm:text-lg max-w-md sm:max-w-xl mb-4 sm:mb-6">{overview}</p>

      <div className="flex flex-wrap gap-4">
        <button className="flex items-center px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded">
          <Play className="w-5 h-5 text-gray-800 mr-2" />
          Play
        </button>

        <button className="flex items-center px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded">
          <Info className="w-5 h-5 text-gray-800 mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

