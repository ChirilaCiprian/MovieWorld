import React from "react";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="movie-img">
        <img src={movie.Poster}></img>
      </div>
      <div className="Content">
        <span>{movie.Title}</span>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};
export default MovieCard;
