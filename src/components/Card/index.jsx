import React from "react";
import "./index.css";
export const Card = (props) => {
  return (
    <div className="Card">
      <img className="Card_img" src={props.image} alt="coolImage" />
      <p className="Card_name">{props.name}</p>
      <p className="Card_price">{props.price}</p>
      <button>CheckItem</button>
    </div>
  );
};
