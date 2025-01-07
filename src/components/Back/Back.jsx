import PropTypes from "prop-types";
import React from "react";
import stateDefault from "./state-default.svg";
// import "./back.css";

export const Back = ({ state, className }) => {
  return (
    <img
      className={`back ${className}`}
      alt="State default"
      src={stateDefault}
    />
  );
};

Back.propTypes = {
  state: PropTypes.oneOf(["default"]),
};
