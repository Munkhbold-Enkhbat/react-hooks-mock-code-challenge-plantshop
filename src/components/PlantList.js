import React, { useEffect } from "react";
import { useState } from "react/cjs/react.production.min";
import PlantCard from "./PlantCard";

function PlantList() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  function renderPlants() {
    return plants.map(plant => {
      return <PlantCard key={plant.id} plant={plant}/>
    })
  }

  return (
    <ul className="cards">
      {renderPlants()}
    </ul>
  );
}

export default PlantList;
