import './Counter.css';
import { useEffect, useState } from 'react';

const Counter = ({ sub, add, reset }) => {
  const [counter, setCounter] = useState(0);
  const [counterColor, setCounterColor] = useState('neutral');

  const colorChangerHandler = () => {
    if (counter === 0) {
      setCounterColor('neutral');
    } else if (counter < 0) {
      setCounterColor('negative');
    } else {
      setCounterColor('positive');
    }
  };
  const incrementCounterHandler = () => {
    setCounter(prevCounter => prevCounter + 1);
    // colorChangerHandler();
  };
  const decrementCounterHandler = () => {
    setCounter(prevCounter => prevCounter - 1);
    // colorChangerHandler();
  };
  const restartCounterHandler = () => {
    setCounter(0);
    // colorChangerHandler();
  };

  useEffect(() => {
    colorChangerHandler();
  }, [counter]);
  useEffect(() => {
    document.title = `You clicked ${counter} times!`;
  });

  return (
    <div className="counter">
      <p className={counterColor}>{counter}</p>
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
