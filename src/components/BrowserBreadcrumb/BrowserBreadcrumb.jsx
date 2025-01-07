import PropTypes from "prop-types";
import React from "react";
// import "./browser-breadcrumb.css";

export const BrowserBreadcrumb = ({ state, className }) => {
  return (
    <div className={`browser-breadcrumb ${className}`}>
      <div className="multiplayer">MULTIPLAYER</div>
    </div>
  );
};

BrowserBreadcrumb.propTypes = {
  state: PropTypes.oneOf(["default"]),
};
