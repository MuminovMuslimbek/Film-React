import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movieslist from './components/Movieslist/movies.json';
import heart from "./assets/heart.svg";
import heartSolid from "./assets/heart-solid.svg";

const MoviesComponent = ({ Movieslist }) => {
  const [likedMovies, setLikedMovies] = useState({});
  const [count, setCount] = useState(0);

  const handleClick = (movieId) => {
    setLikedMovies((prev) => {
      const isLiked = !prev[movieId];
      setCount((prevCount) => prevCount + (isLiked ? 1 : -1));
      return {
        ...prev,
        [movieId]: isLiked,
      };
    });
  };

  return (
    <div>
      <Header count={count} />
      <div className="containerMovies">
        <h1>Movies</h1>
        <div className="wrapperMovies">
          {Movieslist.map((movie, index) => (
            <div className="cardMovie" key={index}>
              <img src={movie.Images[0]} alt="Movie Poster" />
              <div className="titleMovies">
                <h3>{movie.Title}</h3>
                <p>{movie.Plot}</p>
                <button onClick={() => handleClick(movie.id)} className="like">
                  {likedMovies[movie.id] ? (
                    <img src={heartSolid} alt="Heart Icon" />
                  ) : (
                    <img src={heart} alt="Heart Icon" />
                  )}
                </button>
                <ul className="commentMovies">
                  <span className="spanId">{movie.id}</span>
                  <li><strong>Yil:</strong> {movie.Year}</li>
                  <li><strong>Reyting:</strong> {movie.Rated}</li>
                  <li><strong>Chiqarilgan sana:</strong> {movie.Released}</li>
                  <li><strong>Davomiyligi:</strong> {movie.Runtime}</li>
                  <li><strong>Janr:</strong> {movie.Genre}</li>
                  <li><strong>Rejissor:</strong> {movie.Director}</li>
                  <li><strong>Yozuvchi:</strong> {movie.Writer}</li>
                  <li><strong>Aktyorlar:</strong> {movie.Actors}</li>
                  <li><strong>Til:</strong> {movie.Language}</li>
                  <li><strong>Mamlakat:</strong> {movie.Country}</li>
                  <li><strong>Mukofotlar:</strong> {movie.Awards}</li>
                  <li><strong>IMDb reytingi:</strong> {movie.imdbRating}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <MoviesComponent Movieslist={Movieslist} />
    </div>
  );
};

export default App;
