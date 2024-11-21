import './index.css';
import heart from "../../assets/heart.svg";
import heartSolid from "../../assets/heart-solid.svg";

const User = (props) => {
    const { id, Title, Plot, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Language, Country, Awards, imdbRating, Images } = props;

    return (
        <div className="cardMovie">
            <img src={Images} alt="Movie Poster" />
            <div className="titleMovies">
                <h3>{Title}</h3>
                <p>{Plot}</p>
                <div className='like'>
                    <img src={heart} />
                </div>
                <ul className="commentMovies">
                    <span className='spanId'>{id}</span>
                    <li><strong>Yil:</strong> {Year}</li>
                    <li><strong>Reyting:</strong> {Rated}</li>
                    <li><strong>Chiqarilgan sana:</strong> {Released}</li>
                    <li><strong>Davomiyligi:</strong> {Runtime}</li>
                    <li><strong>Janr:</strong> {Genre}</li>
                    <li><strong>Rejissor:</strong> {Director}</li>
                    <li><strong>Yozuvchi:</strong> {Writer}</li>
                    <li><strong>Aktyorlar:</strong> {Actors}</li>
                    <li><strong>Til:</strong> {Language}</li>
                    <li><strong>Mamlakat:</strong> {Country}</li>
                    <li><strong>Mukofotlar:</strong> {Awards}</li>
                    <li><strong>IMDb reytingi:</strong> {imdbRating}</li>
                </ul>
            </div>
        </div>
    );
};

export default User;
