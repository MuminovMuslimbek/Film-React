import './index.css';
import movie from "../../assets/movie.png";
import heart from "../../assets/heart.svg";

const Header = ({ count }) => {
  return (
    <div>
      <header className="header">
        <div className="header__container container">
          <a className="element" href="../index.html">
            <h1 className="element">
              <img src={movie} className="logo" alt="Logo" />
              Kino Ro'yxati
            </h1>
          </a>
          <ul>
            <li><a href="#">Bosh sahifa</a></li>
            <li><a href="#">Kinolar</a></li>
            <li><a href="#">Yangiliklar</a></li>
          </ul>
          <div className="likes">
            <img src={heart} alt="Heart Icon" />
            <span className="count">{count > 0 ? count : 0}</span> likes
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
