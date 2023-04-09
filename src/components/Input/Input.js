import "./Input.css";
import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  return (
    <>
      <input
        onChange={(event) => inputHandler(event)}
        value={inputValue}
        placeholder="Some text"
        type="text"
      ></input>
    </>
  );
};

export default Input;
