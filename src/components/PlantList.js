import React, { useEffect, useState } from 'react';
import PlantCard from "./PlantCard";

function PlantList({ search }) {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const plantCards = filteredPlants.map(plantObj => {
    return <PlantCard key={plantObj.id} plant={plantObj} />
  })
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
