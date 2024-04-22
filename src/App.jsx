import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MapTwo from "./map/MapTwo";

function App() {
  const [societiesListSocieties, setSocietiesListSocieties] = useState([]);


  useEffect(() => {

    const fetchAllSocietiesListSocieties = async () => {
      try {
        const response = await fetch('https://map.rmz.one/api/list-regions-with-societies');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSocietiesListSocieties(data.data.data); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch AllSocietiesList:", error);
      }
    };



    fetchAllSocietiesListSocieties()
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<MapTwo societiesListSocieties={societiesListSocieties} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
