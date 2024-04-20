import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Map from "./map/Map";
import MapTwo from "./map/MapTwo";
import KSAMap from "./KSAMap/KSAMap";
import RotatePhone from "./map/components/RotatePhone";

function App() {
  const [societiesList, setSocietiesList] = useState([]);
  const [societies, setSocieties] = useState([]);



  useEffect(() => {
    // Fetch all project data from the API on component mount
    const fetchAllSocietiesList = async () => {
      try {
        const response = await fetch('https://map.rmz.one/api/list-societies');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSocietiesList(data.data.data); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch AllSocietiesList:", error);
      }
    };
    const fetchRegionsId = async () => {
      try {
        const response = await fetch('https://map.rmz.one/api/get-region/1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSocieties(data.data.societies); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch AllSocietiesList:", error);
      }
    };

    fetchAllSocietiesList();
    fetchRegionsId();
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<KSAMap />} />
          <Route path="/map" element={<MapTwo societies={societies} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
