import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ searchedPlant }) {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  const filteredPlants = searchedPlant === "" ? 
    [...plants] :
    plants.filter(plant => plant.name.toLowerCase().includes(searchedPlant.toLowerCase()))

  function renderPlants() {
    return filteredPlants.map(plant => {
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
