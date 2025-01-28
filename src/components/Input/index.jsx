import React from "react";
import "./index.css";
export const Input = (props) => {
  return (
    <input
      className="mainInput"
      onChange={props.onChange}
      type={props.type}
      value={props.value}
      name={props.name}
    />
  );
};
