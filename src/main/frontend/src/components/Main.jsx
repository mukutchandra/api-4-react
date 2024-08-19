import React, { useState } from 'react';
import Dropdown from './Dropdown';
import TableNameWithButton from './TableNameWithButton';
import './Main.css';

const Main = () => {
    const [selectedDatabaseType, setSelectedDatabaseType] = useState('Snowflake');
    const [selectedSchema, setSelectedSchema] = useState('NROUI');
    const [selectedEnvironment, setSelectedEnvironment] = useState('QA');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);

  const handleDatabaseTypeChange = (value) => {
    setSelectedDatabaseType(value);
  };

  const handleSchemaChange = (value) => {
    setSelectedSchema(value);
  };

  const handleEnvironmentChange = (value) => {
    setSelectedEnvironment(value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/count', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          databaseType: selectedDatabaseType,
          schema: selectedSchema,
          environment: selectedEnvironment,
          tableName: inputValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.count);
      } else {
        console.error('API call failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="parent-container">
      <label className="label" htmlFor="databaseTypeDropdown">Database Type</label>
      <Dropdown id="databaseTypeDropdown" onChange={handleDatabaseTypeChange} options={['Snowflake', 'Oracle']} />
      
      <label className="label" htmlFor="schemaDropdown">Schema</label>
      <Dropdown id="schemaDropdown" onChange={handleSchemaChange} options={['NROUI', 'RFEDB']} />
      
      <label className="label" htmlFor="environmentDropdown">Environment</label>
      <Dropdown id="environmentDropdown" onChange={handleEnvironmentChange} options={['QA']} />
      
      <label className="label" htmlFor="textbox">Table Name</label>
      <TableNameWithButton 
        inputValue={inputValue} 
        onInputChange={handleInputChange} 
        onSubmit={handleSubmit} 
      />
      {result !== null && <p className="result">Count: {result}</p>}
    </div>
  );
};

export default Main;
