import './index.css';
import Adress from '../Adress';
import Car from '../Car';

const User = (props) => {
    const { id, firstName, lastName, phone, email, addressReg, addressZip, image, cars } = props;

    return (
        <div className="user">
            <img src={image} />
            <div className="userText">
                <span>{id}</span>
                <div className="name">
                    <h3>{firstName}</h3>
                    <h3>{lastName}</h3>
                </div>
                <div className="informat">
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
                <Adress addressReg={addressReg} addressZip={addressZip} />
                <Car cars={cars} />
            </div>
        </div>
    );
};

export default User;
