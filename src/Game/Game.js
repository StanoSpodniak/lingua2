import React, { useState, useEffect } from 'react';
import Animals from '../Dictionary/animals.json';

const Game = () => {
  const [animals, setAnimals] = useState([]);
  const [randomAnimal, setRandomAnimal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.resolve(Animals);
        setAnimals(response);
        } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
}, []);

  const getRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const randomAnimal = animals[randomIndex];
    setRandomAnimal(randomAnimal);
  };

  return (
    <div>
      <button onClick={getRandomAnimal}>Get Random Animal</button>
      {randomAnimal && (
        <div>
          <h2>Random Animal:</h2>
          <p>ID: {randomAnimal.id}</p>
          <p>English: {randomAnimal.english}</p>
          <p>Spanish: {randomAnimal.spanish}</p>
        </div>
      )}
    </div>
  );
};

export default Game;