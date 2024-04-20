import "../../assets/css/clouds.css";
const CustomMarkerTwo = ({ isActive, name, location, onClick }) => {
  console.log("color", isActive);
  return (
    <>
      {isActive && (
        <div
          style={{ zIndex: 1, position: "absolute", top: 0, left: 0 }}
          onClick={() => setBackDrop(false)}
        ></div>
      )}
      <div onClick={onClick} className="mapMark2" style={{ zIndex: "1000" }}>
        <div
          className="mapMarkFamous"
          style={{
            backgroundColor: isActive ? "white" : "rgba(0, 0, 0, 0.6)",
            color: isActive ? "black" : "white",
            transform: isActive ? "scale(1.1)" : "0px",
          }}
        >
          {name}
        </div>
      </div>
    </>
  );
};
export default CustomMarkerTwo;
