import { useState } from "react";
import "./App.scss";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div className="counter">
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>

        <div className="result">{counter}</div>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default App;
