import { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  OverlayView,
  DirectionsRenderer,
  Polyline,
} from "@react-google-maps/api";
import "../assets/css/home.css";
import "../assets/css/clouds.css";
import { HospitalsIcon, MallIcon, Question, SchoolIcon, SmallWhiteMark } from "../assets/svg";
import Clouds from "./components/Clouds";
import CheckBox from "./components/CheckBox";
import { mapStyles } from "./components/mapStyles";
import Compass from "./components/Compass";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CustomMarker from "./components/CustomMarker";
import CustomMarkerTwo from "./components/CustomMarkerTwo";
import RotatePhone from "./components/RotatePhone";
import { House, MapMark } from "../assets/svg";
import SociteMarker from "./components/sociteMarker";

import { IoLocation } from "react-icons/io5";


const id = ["360671dee42bc03f"];

const defaultLocations = [
  { name: "Riyadh", position: { lat: 24.774265, lng: 46.738586 } },
  { name: "الرياض", position: { lat: 24.774265, lng: 46.738586 } },
  { name: "Mecca", position: { lat: 21.3891, lng: 39.8579 } },
  { name: "Madinah", position: { lat: 24.5247, lng: 39.5692 } },
  { name: "سرايا الفرسان", position: { lat: 24.80351, lng: 46.71929 } },
];





const MarkersFamous = [
  { name: "الياسمين", position: { lat: 24.82449, lng: 46.64469 } },
  { name: " جامعة الملك", position: { lat: 24.72348, lng: 46.62365 } },
];
const schoolMarks = [
  {
    name: "King Saud University",
    position: { lat: 24.652070684654174, lng: 46.694670185167546 },
  },
  {
    name: "Riyadh Elm University",
    position: { lat: 24.67942698850239, lng: 46.70001103383084 },
  },
  {
    name: "The Saudi Electronic University",
    position: { lat: 24.80069303085576, lng: 46.672821258817685 },
  },
  {
    name: "The Saudi Electronic University",
    position: { lat: 24.813914893724405, lng: 46.69418465347088 },
  },
];
const mallMarks = [
  {
    name: "hayat mall",
    position: { lat: 24.743017504463868, lng: 46.679101366005185 },
  },
  {
    name: "fortore mall",
    position: { lat: 24.80371310795081, lng: 46.69475029370586 },
  },
  {
    name: "saco",
    position: { lat: 24.81095881460978, lng: 46.668912437549835 },
  },
  {
    name: "almakan mall",
    position: { lat: 24.79113154246676, lng: 46.61219160691025 },
  },
];

const hospitalsMarks = [
  {
    name: "kingdom hospital",
    position: { lat: 24.801318392741287, lng: 46.65433922225666 },
  },
  {
    name: "dallah hospital",
    position: { lat: 24.747113744163183, lng: 46.65165686785796 },
  },
  {
    name: "Dr. Sulaiman Al Habib Hospital ",
    position: { lat: 24.720173924995564, lng: 46.66068909783942 },
  },
  {
    name: "King Faisal Specialist Hospital",
    position: { lat: 24.672379211913196, lng: 46.679080773526806 },
  },
  {
    name: "King fahd Hospital",
    position: { lat: 24.75125048904844, lng: 46.86225948016457 },
  },
  {
    name: "Al Jazeera hospital",
    position: { lat: 24.716113771223405, lng: 46.84666974096232 },
  },
];

const IconsMarker = ({ name, icon, nameBoxColor }) => {
  return (
    <div className="IconMarker">
      <div className="RoundedMarkIcon">
        <img src={icon} alt="" />
      </div>
      <div className="markName" style={{ backgroundColor: nameBoxColor }}>
        {name}
      </div>
    </div>
  );
};
const IconsMarker2 = ({ name, icon, nameBoxColor }) => {
  return (
    <div
      className="marksImgContainer"
      style={{
        // inset: `${windowHeight * 0.369}px auto auto ${windowWidth * 0.515
        //   }px`,
        // width: `${windowWidth * 0.044}px`,
        // height: `${windowHeight * 0.053}px`,
        pointerEvents: "auto",
        background: 'red !important',
        width: `200px`,
        height: `220px`
      }}
      onClick={handleCityPage}
    >

    </div >
  );
};

const MapTwo = ({ societies }) => {
  const [response, setResponse] = useState(null);
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [overlayViews, setOverlayViews] = useState([]);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [backdrop, setBackDrop] = useState(false);
  const [animatedPath, setAnimatedPath] = useState([]);
  const [animatedCompleted, setAnimatedCompleted] = useState(false);
  //icons overlays and states
  const [overlayViews2, setOverlayViews2] = useState([]);
  const [schoolsOverLay, setSchoolOverLay] = useState();
  const [mallsOverlay, setMallOverlay] = useState();
  const [hospitalsOverlay, setHospitalsOverlay] = useState();
  const [societiessOverlay, setSocietiessOverlay] = useState();
  const [isLandMarksChecked, setIsLandMarksChecked] = useState(true);
  const [isSchoolsMarkChecked, setIsSchoolsMarkChecked] = useState(false);
  const [isMallsMarkChecked, setIsMallMarkChecked] = useState(false);
  const [isHospitalMarkChecked, setIsHospitalMarkChecked] = useState(false);
  const [isSocietiesMarkChecked, setIsSocietiesMarkChecked] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleCheckboxChange = (e) => {
    setIsLandMarksChecked(e.target.checked);
  };
  const handleSchoolMarkChange = (e) => {
    setIsSchoolsMarkChecked(e.target.checked);
  };
  const handleMallMarkChange = (e) => {
    setIsMallMarkChecked(e.target.checked);
  };
  const handleHospitalMarkChange = (e) => {
    setIsHospitalMarkChecked(e.target.checked);
  };
  const handleSocietiesMarkChange = (e) => {
    setIsSocietiesMarkChecked(e.target.checked);
  };
  //icons overlays and states
  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  // to show custom markers when map loads
  useEffect(() => {
    if (mapLoaded) {
      const schoolsOverLay = schoolMarks.map((location, index) => (
        <OverlayView
          key={index}
          position={location.position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <IconsMarker
            name={location.name}
            location={location.position}
            backdrop={backdrop}
            icon={SchoolIcon}
            nameBoxColor={"#8a93dd"}
          ></IconsMarker>
        </OverlayView>
      ));
      const hospitalsOverlay = hospitalsMarks.map((location, index) => (
        <OverlayView
          key={index}
          position={location.position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <IconsMarker
            name={location.name}
            icon={HospitalsIcon}
            nameBoxColor={"#eb7979"}
          ></IconsMarker>
        </OverlayView>
      ));
      const mallsOverLay = mallMarks.map((location, index) => (
        <OverlayView
          key={index}
          position={location.position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <IconsMarker
            name={location.name}
            icon={MallIcon}
            nameBoxColor={"#fcb270"}
          ></IconsMarker>
        </OverlayView>
      ));
      setOverlayViews(defaultLocations);
      setOverlayViews2(MarkersFamous);
      setSchoolOverLay(schoolsOverLay);
      setMallOverlay(mallsOverLay);
      setHospitalsOverlay(hospitalsOverlay);
      setSocietiessOverlay(societiessOverlay);
    }
  }, [mapLoaded]);

  //remove the direction line if the click happens out side the elements
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
        setAnimatedCompleted(false);
        setAnimatedPath([]);
      }
      if (
        !!e.target.classList.contains("mapOrange") ||
        !!e.target.classList.contains("mapMark") ||
        !!e.target.classList.contains("mapMarkFamous")
      ) {
        console.log("no");
      } else {
        setStartPoint(null);
        setEndPoint(null);
        setResponse(null);
      }
    });
  }, [intervalId]);

  //get details of the clicked location
  const fetchLocationDetails = (lat, lng) => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    const request = {
      location: new window.google.maps.LatLng(lat, lng),
      radius: 100, // Adjust the radius as needed
    };

    service.nearbySearch(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results.length > 0
      ) {
        const place = results[0];

        setSelectedLocation({
          name: place.name,
          address: place.formatted_address,
          photo: place.photos ? place.photos[0].getUrl() : null,
          rating: place.rating,
          openingHours: place.opening_hours,
          position: { lat, lng },
        });
      }
    });
  };

  //handle marker click (any marker)
  const handleMarkClick = (location) => {
    fetchLocationDetails(location.position.lat, location.position.lng);
    const clickedLat = location.position.lat;
    const clickedLng = location.position.lng;

    const isDefaultStartPoint = defaultLocations.some((loc) => {
      const { lat, lng } = loc.position;
      return lat === clickedLat && lng === clickedLng;
    });
    if (isDefaultStartPoint) {
      setStartPoint(`${clickedLat}, ${clickedLng}`);
    } else {
      // If end point is not set, set it
      if (!endPoint) {
        setEndPoint(`${clickedLat}, ${clickedLng}`);
        // Fetch details for the clicked location using Places API
        fetchLocationDetails(clickedLat, clickedLng);
      } else {
        // Reset if both start and end points are set
        setStartPoint(null);
        setEndPoint(null);
        setResponse(null);
        // setDistance(null);
        // setDuration(null);
      }
    }
  };


  //making the direction line between start and end point
  const calculateDirections = () => {
    if (startPoint && endPoint) {
      // setBackDrop(true);
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: startPoint,
          destination: endPoint,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            if (intervalId) {
              clearInterval(intervalId);
              setIntervalId(null);
              setAnimatedCompleted(false);
              setAnimatedPath([]);
            }
            // Start a new animation and store the interval ID
            const newIntervalId = animateRoute(result);
            setIntervalId(newIntervalId);
            setResponse(result);

            // Extract distance and duration from the result
            const leg = result.routes[0].legs[0];
            setDistance(leg.distance.text);
            setDuration(leg.duration.text);
          } else {
            console.error(`Directions request failed due to ${status}`);
          }
        }
      );
    }
  };
  useEffect(() => {
    if (startPoint && endPoint) {
      calculateDirections();
    }
  }, [startPoint, endPoint]);

  const DistanceDurationOverlay = ({ map, response }) => {
    const leg = response?.routes[0]?.legs[0];

    if (!leg) {
      return null;
    }

    const routeBounds = new window.google.maps.LatLngBounds(
      leg.start_location,
      leg.end_location
    );

    const routeCenter = routeBounds.getCenter();
    const distanceDurationPosition =
      window.google.maps.geometry.spherical.computeOffset(
        routeCenter,
        50, // Adjust this value to control the distance above the route
        leg.steps[0].heading
      );
    return (
      <OverlayView
        position={{
          lat: distanceDurationPosition.lat(),
          lng: distanceDurationPosition.lng(),
        }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div className="distance_duration_info_overlay">
          <p> {leg.distance.text} </p>
          <div className="divider"></div>
          <p> {leg.duration.text}</p>
          <DirectionsCarIcon />
        </div>
      </OverlayView>
    );
  };

  const animateRoute = (result) => {
    const path = result.routes[0].overview_path;
    const stepCount = path.length;

    // Set initial position
    let step = 0;

    // Use the window.setInterval function to update the route at regular intervals
    const animationInterval = window.setInterval(() => {
      if (step >= stepCount) {
        // Stop the animation when all steps are processed
        window.clearInterval(animationInterval);
        setAnimatedCompleted(true);
      } else {
        // Update the path up to the current step
        const animatedPath = path.slice(0, step + 1);
        setAnimatedPath(animatedPath);

        // Increment the step
        step += 6;
      }
    }, 50); // Adjust the interval according to your preference
    return animationInterval;
  };


  return (
    <div
      style={{
        top: "0",
        right: "0",
        position: "fixed",
        width: "100%",
      }}
    >




      <CheckBox
        isLandMarksChecked={isLandMarksChecked}
        handleCheckboxChange={handleCheckboxChange}
        isSchoolsMarkChecked={isSchoolsMarkChecked}
        handleSchoolMarkChange={handleSchoolMarkChange}
        isMallsMarkChecked={isMallsMarkChecked}
        handleMallMarkChange={handleMallMarkChange}
        isHospitalMarkChecked={isHospitalMarkChecked}
        handleHospitalMarkChange={handleHospitalMarkChange}
        handleSocietiesMarkChange={handleSocietiesMarkChange}
      />
      {/* <Clouds /> */}

      <LoadScript
        googleMapsApiKey="AIzaSyC0fUYASQXlqfp1d5EFSIT7_0lg0_OIxq0"
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100vh",
          }}
          onLoad={handleMapLoad}
          center={{ lat: 24.774265, lng: 46.738586 }}
          zoom={11}
          options={{
            styles: mapStyles,
            mapTypeId: "hybrid",
            // mapIds: "360671dee42bc03f",
            draggable: true,
            zoomControl: true,
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: true,
            googleLogo: false,
            compassControl: false,
          }}
        >


          {isSchoolsMarkChecked && schoolsOverLay}
          {isMallsMarkChecked && mallsOverlay}
          {isHospitalMarkChecked && hospitalsOverlay}
          {isSocietiesMarkChecked && hospitalsOverlay}
          {animatedPath && animatedPath.length > 0 && (
            <Polyline
              path={animatedPath}
              options={{
                strokeColor: "#fff", // Set your desired stroke color
                strokeOpacity: 1,
                strokeWeight: 4,
              }}
            />
          )}
          {/* {overlayViews} */}

          {societies?.map((society, index) => (
            <OverlayView
              key={society.id}
              position={{
                lat: parseFloat(society.lat),
                lng: parseFloat(society.long)
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >

              {/* <IconsMarker2
                name={society.name}
                location={{
                  lat: parseFloat(society.lat),
                  lng: parseFloat(society.long)
                }}
                onClick={() => handleMarkClick({
                  name: society.name,
                  position: {
                    lat: parseFloat(society.lat),
                    lng: parseFloat(society.long)
                  }
                })}
              /> */}





              <div className="societie">
                <div className="RoundedMarkIcon">
                  <IoLocation color="#ffffff" fontSize={24} />
                </div>

                <div className="markName">
                  <p>{society.name}</p>
                </div>

                {/* <div className="heartbeat"></div */}


              </div>


            </OverlayView>
          ))}


          {isLandMarksChecked &&
            overlayViews2.map((location, index) => (
              <OverlayView
                key={index}
                position={location.position}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <CustomMarkerTwo
                  name={location.name}
                  location={location.position}
                  onClick={() => handleMarkClick(location)}
                  isActive={
                    backdrop &&
                    location.position.lat === +`${endPoint}`.split(",")[0] &&
                    location.position.lng === +`${endPoint}`.split(",")[1]
                  }
                ></CustomMarkerTwo>
              </OverlayView>
            ))}
          {/* {isLandMarksChecked && overlayViews2} */}

          {response && (
            <>
              <DirectionsRenderer
                options={{
                  directions: response,
                  markerOptions: { visible: false },
                  polylineOptions: {
                    strokeOpacity: 0,
                    zIndex: "1000000000",
                    visible: false,
                    icons: [
                      {
                        icon: {
                          path: "M 0,-0.1 0,1",
                          strokeOpacity: 0.8,
                          strokeColor: "#fff",
                          scale: 5,
                          zIndex: 10000,
                        },
                        offset: "0",
                        repeat: "5px",
                      },
                    ],
                  },

                  preserveViewport: true,
                  duration: 100,
                }}

              // onLoad={onLoad}
              // onDirectionsChanged={onDirectionsChanged}
              />
              {animatedCompleted && (
                <DistanceDurationOverlay response={response} />
              )}
            </>
          )}
        </GoogleMap>
      </LoadScript>


      {/* <Compass /> */}
    </div >
  );
};

export default MapTwo;
