import './Dropdown.css';
import { useState } from 'react';

const Dropdown = () => {
  const [selectedClient, setSelectedClient] = useState([]);

  const handleSelectChange = event => {
    setSelectedClient(event.target.value);
  };
  return (
    <div className="dropdown">
      <div>
        <label for="cars">Choose a car:</label>

        <select onChange={handleSelectChange} name="cars" id="cars">
          <option value="Volvo">Volvo</option>
          <option value="Saab">Saab</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
        </select>
      </div>

      <label>Chosen car: {selectedClient}</label>
    </div>
  );
};

export default Dropdown;
