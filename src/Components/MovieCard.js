import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null; // Don't render if no poster path

  return (
    <div className="w-[100px] pr-2">
        <img
            alt="Movie Poster"
            src={IMG_CDN_URL + posterPath}
            className="rounded-lg"
        />
    </div>
  )
}

export default MovieCard