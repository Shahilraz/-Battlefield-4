import PropTypes from "prop-types";
import React from "react";
import sideMenuHelp from "./side-menu-help.svg";
import sideMenuQuit from "./side-menu-quit.svg";
// import "./side-menu-misc.css";

export const SideMenuMisc = ({ type, state, className }) => {
  return (
    <div className={`side-menu-misc ${type} ${className}`}>
      <img
        className="side-menu-help"
        alt="Side menu help"
        src={type === "side-menu-quit-wrapper" ? sideMenuQuit : sideMenuHelp}
      />
    </div>
  );
};

SideMenuMisc.propTypes = {
  type: PropTypes.oneOf(["side-menu-quit-wrapper", "side-menu-help-wrapper"]),
  state: PropTypes.oneOf(["default"]),
};
