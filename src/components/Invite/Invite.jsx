import PropTypes from "prop-types";
import React from "react";
// import "./invite.css";

export const Invite = ({ menuType, className, joinClassName }) => {
  return (
    <div className={`invite ${className}`}>
      <div className="home-offline">
        <div className="friend-profile-pic">
          <img className="home-friend-line" alt="Home friend line" />

          <img className="home-friend-picture" alt="Home friend picture" />
        </div>

        <div className="div-2" />
      </div>

      <div className="home-online">
        <div className="friend-profile-pic-2">
          <img className="home-friend-line" alt="Home friend line" />

          <img className="home-friend-picture" alt="Home friend picture" />
        </div>

        <div className="div-2">
          <div className="online" />
        </div>
      </div>

      <div className="home-squad">
        <img className="squad" alt="Squad" />

        <div className={`join ${joinClassName}`} />
      </div>
    </div>
  );
};

Invite.propTypes = {
  menuType: PropTypes.oneOf(["d-off-on"]),
};
