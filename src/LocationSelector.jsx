import React, { useState } from 'react';

const LocationSelector = ({ onSearch }) => {
  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    onSearch(pointA, pointB, date);
  };

  return (
    <div>
      <label htmlFor="pointA">From:</label>
      <input
        type="text"
        id="pointA"
        value={pointA}
        onChange={(e) => setPointA(e.target.value)}
      />
      <label htmlFor="pointB">To:</label>
      <input
        type="text"
        id="pointB"
        value={pointB}
        onChange={(e) => setPointB(e.target.value)}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocationSelector;
