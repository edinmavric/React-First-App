import './InputValue.css';
import { useRef, useState } from 'react';

const InputValue = () => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-value__container">
      <input value={inputValue} onChange={event => inputChangeHandler(event)} />
      <p>Uneli ste: {inputValue}</p>
    </div>
  );
};

export default InputValue;
