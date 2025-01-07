import PropTypes from "prop-types";
import React from "react";
import sideMenuGame from "./side-menu-game.png";
import sideMenuLineGame from "./side-menu-line-game.svg";
import typeWatchStateDefault from "./type-watch-state-default.svg";
// import "./side-menu.css";

export const SideMenu = ({ type, state, typeStateClassName }) => {
  return (
    <>
      {["BH", "bf1", "bf4", "bf5", "career", "news"].includes(type) && (
        <div className={`side-menu ${type} ${state} ${typeStateClassName}`}>
          {state === "current" && (
            <>
              <img
                className="side-menu-game"
                alt="Side menu game"
                src={sideMenuGame}
              />

              <img
                className="side-menu-line-game"
                alt="Side menu line game"
                src={sideMenuLineGame}
              />
            </>
          )}

          {type === "news" && (
            <div className="side-menu-news">
              <div className="rectangle" />

              <div className="div" />

              <div className="rectangle-2" />
            </div>
          )}
        </div>
      )}

      {type === "watch" && (
        <img
          className={`side-menu type-watch-state ${typeStateClassName}`}
          alt="Type watch state"
          src={typeWatchStateDefault}
        />
      )}
    </>
  );
};

SideMenu.propTypes = {
  type: PropTypes.oneOf(["career", "bf5", "BH", "watch", "bf1", "news", "bf4"]),
  state: PropTypes.oneOf(["current", "default"]),
};
