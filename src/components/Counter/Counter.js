import './Counter.css';
import { useState } from 'react';

const Counter = ({ sub, add, reset }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounterHandler = () => {
    setCounter(counter + 1);
  };
  const decrementCounterHandler = () => {
    setCounter(counter - 1);
  };
  const restartCounterHandler = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <p>{counter}</p>
      <div className="buttons">
        <div className="buttons__add-sub">
          <button onClick={decrementCounterHandler}>{sub}</button>
          <button onClick={incrementCounterHandler}>{add}</button>
        </div>
        <div className="buttons__reset">
          <button onClick={restartCounterHandler}>{reset}</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
