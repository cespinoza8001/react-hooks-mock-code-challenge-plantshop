import React, { useState } from 'react';
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("")

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={handleSearch}/>
      <PlantList search={search} />
    </main>
  );
}

export default PlantPage;
