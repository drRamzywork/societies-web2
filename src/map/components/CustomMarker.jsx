import "../../assets/css/clouds.css";
import { House, MapMark } from "../../assets/svg";

const CustomMarker = ({ name, location, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mapMark"
      style={{
        background: `url(${MapMark})`,
        
        // backgroundColor:"#FCB270"
      }}
    >
      <div className="mapOrange">
        {name}
        <img src={House} style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
};

export default CustomMarker;
