import React from "react";
import "../../assets/css/home.css";
import { Phone } from "../../assets/svg";

const RotatePhone = () => {
  return (
    <div className="mobile-help">
      <div className="bg__black"></div>
      <div className="help__wrapper">
        <div className="help__icon">
          <img src={Phone} alt="phone" className="img1" />
        </div>
        <div className="help__description">يرجى تدوير جهازك</div>
      </div>
    </div>
  );
};

export default RotatePhone;
