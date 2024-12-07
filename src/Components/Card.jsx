import '../index.css';
import { Link } from "react-router-dom";
import { useCharStates } from "../Contex/global.context";

const Card = ({ char/*name, username, id */ }) => {

  const {
    dispatch,
    state: { favs },
  } = useCharStates();

  const findFav = favs.find((fav) => fav.id === char.id);

  const addFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
    // Aqui iria la logica para agregar la Card en el localStorage
    //<img src="../../public/images/doctor.jpg" alt="doctor" />
  }

  return (
    <div className="card">
      <Link className="detail-link" to={`/detail/${char.id}`} >
        <img src="../../public/images/doctor.jpg" alt="doctor" className="card-image" />
        <h3>{char.username}</h3>
        <p>{char.name}</p>
      </Link>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">{findFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card; 
