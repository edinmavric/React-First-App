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
      <form>
        <label>Log In</label>
        <div>
          <input placeholder="Username" type="text"></input>
          <input
            onChange={(event) => inputHandler(event)}
            value={inputValue}
            placeholder="Password"
            type="password"
          ></input>
        </div>
      </form>
    </>
  );
};

export default Input;
