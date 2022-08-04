import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./SearchIcon.svg";
const API_URL = "http://www.omdbapi.com/?apikey=e679c12";
let MOVIE;
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const SearchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    SearchMovie("Star Wars");
  }, []);
  return (
    <div className="Container">
      <h1>MovieWorld</h1>
      <div className="SearchBar">
        <input
          className="form__field"
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") SearchMovie(searchTerm);
          }}
        ></input>
        <button onClick={() => SearchMovie(searchTerm)}>
          <img src={SearchIcon} />
        </button>
      </div>

      {movies && movies.length > 0 ? (
        <div className="MoviesContainer">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
