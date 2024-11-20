import './index.css'
import movie from "../../assets/movie.png";
import heart from "../../assets/heart.svg";

const index = () => {
  return (
    <div>
      <header className='header'>
        <div className="header__container container">
          <a className='element' href="../index.html"><h1 className='element'><img src={movie} className='logo' />Kino Ro'yxati</h1></a>
          <ul>
            <li><a href="#">Bosh sahifa</a></li>
            <li><a href="#">Kinolar</a></li>
            <li><a href="#">Yangiliklar</a></li>
          </ul>
          <div className='likes'><img src={heart}/><span className='count'>0</span> likes</div>
        </div>
      </header>
    </div>
  )
}

export default index
