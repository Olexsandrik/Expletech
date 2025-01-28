import React from "react";

export const SelectSorting = (props) => {
  return (
    <>
      <label htmlFor="sorting">Сортування за:</label>
      <select
        id="sorting"
        onChange={(e) => props.handlerSelectTypeSorting(e.target.value)}
      >
        <option value=""></option>
        <option value="min">Мінімальна ціна</option>
        <option value="max">Максимальна ціна</option>
      </select>
    </>
  );
};
