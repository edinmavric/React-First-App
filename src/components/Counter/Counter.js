import "./Counter.css";
import { useState } from "react";

const Counter = () => {
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
        <button onClick={sub}>-</button>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
};

export default Counter;
