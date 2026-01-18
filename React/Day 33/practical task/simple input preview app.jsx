import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Input Preview App</h2>
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Preview: {text}</p>
    </div>
  );
}

export default App;
