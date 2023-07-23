import React from 'react';


const FlightList = ({ flights }) => {
    return (
      <div className="flight-list">
        {flights.length > 0 && (
          <>
            <h2>Available Flights:</h2>
            <ul>
              {flights.map((flight) => (
                <li key={flight.id}>
                  Flight Number: {flight.flightNumber}, Destination: {flight.to}, Departure Time: {flight.departureTime}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };

export default FlightList;
