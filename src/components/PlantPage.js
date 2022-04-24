import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [searchedPlant, setSearchedPlant] = useState('')

  return (
    <main>
      <NewPlantForm />
      <Search setSearchedPlant={setSearchedPlant}/>
      <PlantList searchedPlant={searchedPlant}/>
    </main>
  );
}

export default PlantPage;
