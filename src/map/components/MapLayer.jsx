import { useRef, useEffect } from "react";

const MapComponent = () => {
  const mapRef = useRef(null);
  const museumLayer = useRef(null);
  const schoolLayer = useRef(null);
  // ... (similar refs for other layers)

  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.7749, lng: -122.4194 }, // Set your initial map center
      zoom: 12, // Set your initial zoom level
    });

    // Create map layers for each category
    museumLayer.current = new window.google.maps.places.PlacesService(map);
    schoolLayer.current = new window.google.maps.places.PlacesService(map);
    // ... (similar layers for other categories)
  }, []);

  const toggleLayer = (layer, show) => {
    if (layer) {
      layer.setMap(show ? mapRef.current : null);
    }
  };

  return (
    <div>
      <label>
        Museums
        <input
          type="checkbox"
          onChange={(e) => toggleLayer(museumLayer.current, e.target.checked)}
        />
      </label>
      {/* Repeat similar elements for other categories */}
      <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};

export default MapComponent;
