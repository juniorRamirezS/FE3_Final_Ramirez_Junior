import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

const Card = ({ char/*name, username, id */ }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    //<img src="../../public/images/doctor.jpg" alt="doctor" />
  }

  return (
    <div className="card">
      <img src="../../public/images/doctor.jpg" alt="doctor" className="card-image" />
      <h3>{char.username}</h3>
      <p>{char.name}</p>
      <Link className="detail-link" to={`/detail/${char.id}`} >detail</Link>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card; 
