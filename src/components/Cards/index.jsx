import React from "react";
import "./index.css";
import { Card } from "../Card";
export const Cards = (props) => {
  const sortingWithFilter = [...(props.data || [])].sort((a, b) => {
    return props.typeSorting.type === "min"
      ? a.price - b.price
      : b.price - a.price;
  });

  return (
    <ul className="Cards">
      {sortingWithFilter.length > 0 ? (
        sortingWithFilter.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))
      ) : (
        <h1>Тут нічого немає</h1>
      )}
    </ul>
  );
};
