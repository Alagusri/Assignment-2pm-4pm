import { useState } from "react";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Toggle text state
  const [isVisible, setIsVisible] = useState(true);

  // Input state
  const [inputValue, setInputValue] = useState("");

  // Button text state
  const [buttonText, setButtonText] = useState("Click Me");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      {/* Toggle Text */}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Text
      </button>
      {isVisible && <p>This text is toggled</p>}

      <hr />

      {/* Show input value */}
      <input
        type="text"
        placeholder="Type something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Typed Value: {inputValue}</p>

      <hr />

      {/* Change button text using state */}
      <button onClick={() => setButtonText("Button Clicked!")}>
        {buttonText}
      </button>
    </div>
  );
}

export default App;
