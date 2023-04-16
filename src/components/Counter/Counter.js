import './Counter.css';
import { useState } from 'react';

const Counter = ({ sub, add }) => {
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  return (
    <div className="counter">
      <p>{number}</p>
      <div className="buttons">
        <button onClick={decrement}>{sub}</button>
        <button onClick={increment}>{add}</button>
      </div>
    </div>
  );
};

export default Counter;
