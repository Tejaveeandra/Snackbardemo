import React, { useState, useEffect } from 'react';
import { useSnackbar } from './SnackbarContext';

const url = 'https://dogapi.dog/api/v2/breed';

const Dogs = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [dogs, setDogs] = useState([]);
  const { showSnackbar } = useSnackbar(); 

  useEffect(() => {
    setIsPageLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const { data: dogs } = response;
        setDogs(dogs);
        setIsPageLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        showSnackbar("Something went wrong while loading dogs!");
        setIsPageLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Dogs</h1>
      {isPageLoading
        ? <span>...Loading</span>
        : dogs.map((dog) => <li key={dog.id}><span>{dog.attributes.name}</span></li>)
      }
    </div>
  );
};

export default Dogs;
