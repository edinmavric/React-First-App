import './Counter.css';
import { useState } from 'react';

const Counter = props => {
  const [number, setNumber] = useState(0);
  const add = () => {
    setNumber(number + 1);
  };
  const sub = () => {
    setNumber(number - 1);
  };
  return (
    <div className="counter">
      <p>{number}</p>
      <div className="buttons">
        <button onClick={sub}>{props.sub}</button>
        <button onClick={add}>{props.add}</button>
      </div>
    </div>
  );
};

export default Counter;
