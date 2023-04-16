import './Input.css';
// import { useState } from 'react';

const Input = ({ text, type, placeholder, classes }) => {
  // const [inputValue, setInputValue] = useState('');
  // const inputHandler = event => {
  //   console.log(event.target.value);
  //   setInputValue(event.target.value);
  // };
  return (
    <>
      <div className="labeled-text">
        <label>{text}</label>
      </div>
      <input
        className={classes}
        // onChange={event => inputHandler(event)}
        // value={inputValue}
        placeholder={placeholder}
        type={type}
      ></input>
    </>
  );
};

export default Input;
