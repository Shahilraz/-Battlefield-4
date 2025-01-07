import PropTypes from "prop-types";
import React from "react";
import line14 from "./line-14.svg";
// import "./browser-SI-region-w.css";

export const BrowserSiRegionW = ({ state, className }) => {
  return (
    <div className={`browser-SI-region-w ${className}`}>
      <div className="browser-SI-region">
        <div className="region">REGION</div>

        <div className="europe-de">EUROPE - DE</div>
      </div>

      <img className="line" alt="Line" src={line14} />
    </div>
  );
};

BrowserSiRegionW.propTypes = {
  state: PropTypes.oneOf(["default"]),
};
