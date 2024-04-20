import React from "react";
import "../../assets/css/clouds.css";

const Compass = () => {
  return (
    <div className="compass">
      <div className="compass_wrapper">
        <div className="compass_circle">
          <div className="div_n">N</div>
          <div className="compass_arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Compass;
