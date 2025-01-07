import PropTypes from "prop-types";
import React from "react";
import favorite from "./favorite.svg";
// import "./browser-SI-buttons.css";



export const BrowserSiButtons = ({ type, state, className }) => {
  return (
    <div className={`browser-SI-buttons ${type} ${className}`}>
      {[
        "browser-SI-commander",
        "browser-SI-join",
        "browser-SI-spectate",
      ].includes(type) && (
        <div className="overlap-group">
          <div className="join-2">
            {type === "browser-SI-join" && <>JOIN</>}

            {type === "browser-SI-spectate" && <>SPECTATE</>}

            {type === "browser-SI-commander" && <>JOIN AS COMMANDER</>}
          </div>

          <div className="rectangle-3" />
        </div>
      )}

      {type === "browser-SI-favorite" && (
        <>
          <div className="text-wrapper">13672</div>

          <img className="favorite" alt="Favorite" src={favorite} />
        </>
      )}
    </div>
  );
};

BrowserSiButtons.propTypes = {
  type: PropTypes.oneOf([
    "browser-SI-join",
    "browser-SI-spectate",
    "browser-SI-commander",
    "browser-SI-favorite",
  ]),
  state: PropTypes.oneOf(["default"]),
};
