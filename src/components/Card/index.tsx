import React, { useState } from "react";
import "./index.css";
import { Modal } from "../Modal";
type CardProps = {
  name: string;
  price: number;
  image: string;
};

export const Card: React.FC<CardProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Card">
        <img className="Card_img" src={props.image} alt="coolImage" />
        <p className="Card_name">{props.name}</p>
        <p className="Card_price">{props.price}</p>
        <button onClick={() => setIsOpen(true)}>CheckItem</button>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} data={props} />
      )}
    </>
  );
};
