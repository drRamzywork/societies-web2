import React, { useState, useEffect } from "react";
import {
  Riyad,
  Cloud1,
  Cloud2,
  Cloud3,
  Cloud4,
  Cloud5,
} from "../assets/images";
import "../assets/css/clouds.css";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../assets/css/home.css";
import RotatePhone from "./components/RotatePhone";

const Map = () => {
  const [response, setResponse] = useState(null);
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const calculateDirections = () => {
      if (startPoint && endPoint) {
        const directionsService = new window.google.maps.DirectionsService();

        directionsService.route(
          {
            origin: startPoint,
            destination: endPoint,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
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

    calculateDirections();
  }, [startPoint, endPoint]);

  const onLoad = (directionsService) => {
    console.log("DirectionsService onLoad", directionsService);
  };

  const onDirectionsChanged = () => {
    console.log("DirectionsRenderer directions changed");
  };

  const onMapClick = (event) => {
    // Get the latitude and longitude of the clicked point
    const clickedLat = event.latLng.lat();
    const clickedLng = event.latLng.lng();
    fetchLocationDetails(clickedLat, clickedLng);
    // If start point is not set, set it
    if (!startPoint) {
      setStartPoint(`${clickedLat}, ${clickedLng}`);
    } else {
      // If end point is not set, set it
      if (!endPoint) {
        setEndPoint(`${clickedLat}, ${clickedLng}`);
        // Fetch details for the clicked location using Places API
        fetchLocationDetails(clickedLat, clickedLng);
      } else {
        // Reset if both start and end points are set
        setStartPoint(`${clickedLat}, ${clickedLng}`);
        setEndPoint(null);
        setResponse(null);
        setDistance(null);
        setDuration(null);
      }
    }
  };

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
        const placeId = results[0].place_id;

        // Fetch details for the clicked location using the placeId
        service.getDetails(
          {
            placeId,
            fields: [
              "name",
              "formatted_address",
              "photos",
              "rating",
              "opening_hours",
            ],
          },
          (place, placeStatus) => {
            if (
              placeStatus === window.google.maps.places.PlacesServiceStatus.OK
            ) {
              setSelectedLocation({
                name: place.name,
                address: place.formatted_address,
                photo: place.photos ? place.photos[0].getUrl() : null,
                rating: place.rating,
                openingHours: place.opening_hours,
                position: { lat, lng },
              });
            }
          }
        );
      }
    });
  };

  const onInfoWindowClose = () => {
    setSelectedLocation(null);
  };

  return (
    <>
      {/* <div className="imgRiayd">
        <img src={Riyad} alt="Riyad" className="img1" />
      </div> */}
      <div className="clouds-container">
        <img src={Cloud1} alt="Cloud" className="cloud cloud-1" />
        <img src={Cloud2} alt="Cloud" className="cloud cloud-2" />
        <img src={Cloud3} alt="Cloud" className="cloud cloud-3" />
        <img src={Cloud4} alt="Cloud" className="cloud cloud-4" />
        <img src={Cloud5} alt="Cloud" className="cloud cloud-5" />
      </div>
      <LoadScript
        googleMapsApiKey="AIzaSyC0fUYASQXlqfp1d5EFSIT7_0lg0_OIxq0"
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "500px",
            position: "relative",
          }}
          center={{ lat: 24.774265, lng: 46.738586 }}
          zoom={6}
          onClick={onMapClick}
        >
          {response && (
            <>
              <DirectionsRenderer
                options={{
                  directions: response,
                  markerOptions: { visible: false },
                }}
                onLoad={onLoad}
                onDirectionsChanged={onDirectionsChanged}
              />
              {selectedLocation && (
                <Marker
                  position={selectedLocation.position}
                  onClick={() => setSelectedLocation(selectedLocation)}
                />
              )}
              {selectedLocation && (
                <InfoWindow
                  position={selectedLocation.position}
                  onCloseClick={onInfoWindowClose}
                  className="WindowDetails"
                  options={{ maxWidth: 250, maxHeight: 250 }}
                >
                  <div className="WindowDetails">
                    {selectedLocation.photo && (
                      <img
                        src={selectedLocation.photo}
                        alt={selectedLocation.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    )}
                    <h3>{selectedLocation.name}</h3>
                    <p>{selectedLocation.address}</p>

                    {selectedLocation.rating && (
                      <p>Rating: {selectedLocation.rating}</p>
                    )}
                    {selectedLocation.openingHours && (
                      <p>
                        Opening Hours:{" "}
                        {selectedLocation.openingHours.weekday_text.join(", ")}
                      </p>
                    )}
                  </div>
                </InfoWindow>
              )}
            </>
          )}
        </GoogleMap>

        <div>
          <p>Click on the map to set start and end points:</p>
          <p>Start Point: {startPoint}</p>
          <p>End Point: {endPoint}</p>
        </div>
      </LoadScript>
    </>
  );
};

export default Map;
