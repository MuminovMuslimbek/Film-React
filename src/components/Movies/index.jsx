import './index.css';

const User = (props) => {
    const { id, Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Metascore, imdbRating, imdbVotes, imdbID, Type, Response, Images } = props;

    return (
        <div className="cardMovie">
            <img src={props.Images} />
            <div className="titleMovies">
                <h3>{props.Title}</h3>
                <p>{props.Plot}</p>
                <ul className="commentMovies">
                    <li><strong>Yil:</strong>{props.Year}</li>
                    <li><strong>Reyting:</strong>{props.Rated}</li>
                    <li><strong>Chiqarilgan sana:</strong>{props.Released}</li>
                    <li><strong>Davomiyligi:</strong>{props.Runtime}</li>
                    <li><strong>Janr:</strong>{props.Genre}</li>
                    <li><strong>Rejissor:</strong>{props.Director}</li>
                    <li><strong>Yozuvchi:</strong>{props.Writer}</li>
                    <li><strong>Aktyorlar:</strong>{props.Actors}</li>
                    <li><strong>Til:</strong>{props.Language}</li>
                    <li><strong>Mamlakat:</strong>{props.Country}</li>
                    <li><strong>Mukofotlar:</strong>{props.Awards}</li>
                    <li><strong>IMDb reytingi:</strong>{props.imdbRating}</li>
                </ul>
            </div>
        </div>
    );
};

export default User;
