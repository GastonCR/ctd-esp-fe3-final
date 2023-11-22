import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import doctorimg from "../images/doctor.jpg"


const Card = ({ name, username, id }) => {

  const {state, handleFavs} = useContext(ContextGlobal);
  const addFav = ()=>{
    if (state.favs.some((fav) => fav.id === id)){
      const newFavs = state.favs.filter((fav) => fav.id !== id);
      handleFavs(newFavs);
    } else{
      const fav = {
        name, 
        username, 
        id,
      };

      const arr = [...state.favs, fav];
      handleFavs(arr);
      console.log(arr);
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <Link to={`/dentist/${id}`}>
          <div className="divImgDoctor">
            <img
              className="imgdoctor"
              src={doctorimg}
              alt="Imagen de doctor"
            />
          </div>
          <p>{name}</p>
          <p>{username}</p>
        </Link>
      </div>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
