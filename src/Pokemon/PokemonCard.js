import React from "react";

const PokemonCard = ({ id, image, name, type }) => {
  const style = `card ${type}`;
  return (
    <> 
      <div className={style}>
        <div className="id">
          <small>#{id}</small>
        </div>
        <img src={image} alt={name} className="img" />
        <h3 className="info">{name}</h3>
        <small className="info">Type : {type}</small>
      </div>
    </>
  );
};

export default PokemonCard;
