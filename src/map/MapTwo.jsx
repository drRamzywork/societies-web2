import { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  OverlayView,
} from "@react-google-maps/api";
import "../assets/css/clouds.css";
import CheckBox from "./components/CheckBox";
import { mapStyles } from "./components/mapStyles";
import { IoLocation } from "react-icons/io5";


const MapTwo = ({ societiesListSocieties }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedSocietiesData, setSelectedSocietiesData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 24.774265, lng: 46.738586 });
  const [zoomLevel, setZoomLevel] = useState(6);


  //icons overlays and states
  const handleMapLoad = () => {
    setMapLoaded(true);
  };




  useEffect(() => {
    if (selectedSocietiesData.length > 0) {
      updateMapCenterAndZoom(selectedSocietiesData);
    }
  }, [selectedSocietiesData]);

  const updateMapCenterAndZoom = (data) => {
    const totalLocations = data.length;
    const latLngSum = data.reduce((acc, curr) => {
      acc.lat += parseFloat(curr.lat);
      acc.lng += parseFloat(curr.long);
      return acc;
    }, { lat: 0, lng: 0 });

    const newCenter = {
      lat: latLngSum.lat / totalLocations,
      lng: latLngSum.lng / totalLocations
    };

    setMapCenter(newCenter);
    setZoomLevel(calculateZoomLevel(data)); // Adjust zoom level based on your preference
  };

  const calculateZoomLevel = (data) => {
    // Simple example calculation (you might want a more complex calculation based on actual distances)
    if (data.length === 0) return 15; // Closer zoom if only one point
    if (data.length < 5) return 10; // Slightly broader view for a few points
    return 7; // Default zoom for broader areas
  };



  return (
    <div style={{ top: "0", right: "0", position: "fixed", width: "100%" }}>

      <CheckBox
        societiesListSocieties={societiesListSocieties}
        selectedSocietiesData={selectedSocietiesData}
        setSelectedSocietiesData={setSelectedSocietiesData}
      />
      <h1></h1>

      <LoadScript
        googleMapsApiKey="AIzaSyC0fUYASQXlqfp1d5EFSIT7_0lg0_OIxq0"
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100vh" }}
          onLoad={handleMapLoad}
          center={mapCenter}
          zoom={zoomLevel}

          options={{
            styles: mapStyles,
            mapTypeId: "hybrid",
            draggable: true,
            zoomControl: true,
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: true,
            googleLogo: false,
            compassControl: false,
          }}
        >



          {selectedSocietiesData?.map((society, index) => (
            <OverlayView
              key={society.id}
              position={{
                lat: parseFloat(society.lat),
                lng: parseFloat(society.long)
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="societie">
                <div className="RoundedMarkIcon">
                  <IoLocation color="#ffffff" fontSize={24} />
                </div>

                <div className="markName">
                  <p>{society.name}</p>
                </div>

              </div>


            </OverlayView>
          ))}


        </GoogleMap>
      </LoadScript>


    </div >
  );
};

export default MapTwo;

