import React from 'react';
import './Dropdown.css';

const Dropdown = ({ id, onChange, options }) => {
  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select className="dropdown" id={id} onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
