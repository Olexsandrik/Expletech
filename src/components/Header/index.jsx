import React, { useState } from "react";
import { Input } from "../Input";
import { SelectSorting } from "../../SelectSorting";
import "./index.css";
export const Header = (props) => {
  return (
    <div className="header">
      <a className="logo" href="logo">
        {props.logo}
      </a>

      <div className="input-price-wrapper">
        <Input
          onChange={props.handlerInput}
          name={"catalog"}
          value={props.search}
          type={"text"}
        />

        <SelectSorting
          typeSorting={props.typeSorting}
          handlerSelectTypeSorting={props.handlerSelectTypeSorting}
        />
      </div>
    </div>
  );
};
