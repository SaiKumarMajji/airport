import React from 'react';

const FlightList = ({ flights }) => {
  return (
    <div>
      <h2>Available Flights:</h2>
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight) => (
            <li key={flight.id}>
              Flight Number: {flight.flightNumber}, Destination: {flight.to}, Departure Time: {flight.departureTime}
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available for this travel.</p>
      )}
    </div>
  );
};

export default FlightList;
