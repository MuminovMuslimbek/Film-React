import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import Movieslist from './components/Movieslist/movies.json';

const App = () => {
  return (
    <div>
      <Header />
      <div className="containerMovies">
        <h1>Movies</h1>
        <div className="wrapperMovies">
          {
            Movieslist.map((movie, index) => (
              <Movies key={index} id={movie.id} Title={movie.Title} Year={movie.Year} Rated={movie.Rated} Released={movie.Released} Runtime={movie.Runtime} Genre={movie.Genre} Director={movie.Director} Writer={movie.Writer} Actors={movie.Actors}Plot={movie.Plot}Language={movie.Language}Country={movie.Country}Awards={movie.Awards}Metascore={movie.Metascore}imdbRating={movie.imdbRating}imdbVotes={movie.imdbVotes}imdbID={movie.imdbID}Type={movie.Type}Response={movie.Response}Images={movie.Images[0]}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
