import '../index.css';
import { Link } from "react-router-dom";
import { useCharStates } from "../Contex/global.context";

const Card = ({ char }) => {

  const {
    dispatch,
    state: { favs },
  } = useCharStates();

  const findFav = favs.find((fav) => fav.id === char.id);

  const addFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  }

  return (
    <div className="card-grid">
      <div className="card">
        <Link className="detail-link" to={`/detail/${char.id}`} >
          <img src="../../public/images/doctor.jpg" alt="doctor" className="card-image" />
          <h3>{char.username}</h3>
          <p>{char.name}</p>
        </Link>
        <button onClick={addFav} className="favButton">{findFav ? "🌟" : "⭐"}</button>
      </div>
    </div>
  );
};

export default Card; 
