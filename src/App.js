import React, { useState } from 'react';
import axios from 'axios';
import LocationSelector from './LocationSelector';
import FlightList from './FlightList';

const App = () => {
  const [flights, setFlights] = useState([]);

  const handleSearch = (pointA, pointB, date) => {
    // Make the API call to fetch flights from the backend server
    axios.post('http://localhost:6000/flights', {
      from: pointA,
      to: pointB,
      date: date
    })
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error('Error fetching flights:', error);
      });
  };

  return (
    <div className="app">
      <h1>Airport Transfer Booking App</h1>
      <LocationSelector onSearch={handleSearch} />
      <FlightList flights={flights} />
    </div>
  );
};

export default App;

