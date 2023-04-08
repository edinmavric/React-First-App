import "./Input.css";
import { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  return (
    <div className="inputDiv">
      <input onChange={(e) => inputHandler(e)} value={inputValue}></input>
    </div>
  );
}

export default Input;
