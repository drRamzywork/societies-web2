import React from "react";
import "../../assets/css/clouds.css";
import {
  Riyad,
  Cloud1,
  Cloud2,
  Cloud3,
  Cloud4,
  Cloud5,
} from "../../assets/images";
const Clouds = () => {
  return (
    <div className="clouds-container">
      <img src={Cloud1} alt="Cloud" className="cloud cloud-1" />
      <img src={Cloud2} alt="Cloud" className="cloud cloud-2" />
      <img src={Cloud3} alt="Cloud" className="cloud cloud-3" />
      <img src={Cloud4} alt="Cloud" className="cloud cloud-4" />
      <img src={Cloud5} alt="Cloud" className="cloud cloud-5" />
    </div>
  );
};

export default Clouds;
