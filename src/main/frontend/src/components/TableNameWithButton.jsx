import React from 'react';
import './TableNameWithButton.css';

const TableNameWithButton = ({ inputValue, onInputChange, onSubmit }) => {
  return (
    <div className="textbox-container">
      <input 
        className="textbox" 
        type="text" 
        value={inputValue} 
        onChange={onInputChange} 
        placeholder="Enter table name" 
        id="textbox" 
      />
      <button 
        className="submit-button" 
        onClick={onSubmit} 
        disabled={!inputValue} // Disable button if inputValue is empty
      >
        Submit
      </button>
    </div>
  );
};

export default TableNameWithButton;
