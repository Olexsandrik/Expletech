import React from "react";
import "./index.css";
export const SelectSorting = (props) => {
  return (
    <div className="selectType">
      <label className="labelForSelect" htmlFor="sorting">Сортування за:</label>
      <select
        id="sorting"
        onChange={(e) => props.handlerSelectTypeSorting(e.target.value)}
      >
        <option value=""></option>
        <option value="min">Мінімальна ціна</option>
        <option value="max">Максимальна ціна</option>
      </select>
    </div>
  );
};
