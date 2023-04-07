import "./App.css";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  return (
    <div>
      <Header />
      <Counter />
      <div className="inputDiv">
        <input onChange={(e) => inputHandler(e)} value={inputValue}></input>
      </div>
    </div>
  );
}

export default App;
