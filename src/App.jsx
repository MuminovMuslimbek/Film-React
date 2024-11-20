import './App.css';
import Header from './components/Header';
// import User from './components/User';
// import Movieslist from './components/Movieslist/movies.json';

const App = () => {
  return (
    <div>
      <Header />
      {/* <div className="containerUsers">
        <h1>Users</h1>
        <div className="wrapperCards">
          {
            Movieslist.map((user, index) => (
              <User key={index} id={user.id} firstName={user.firstName} lastName={user.lastName} phone={user.phone} email={user.email} addressReg={user.address.region} addressZip={user.address.zip} image={user.image} cars={user.cars}
              />
            ))
          }
        </div>
      </div> */}
    </div>
  );
}

export default App;
