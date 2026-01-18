import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <h2
        style={{
          color: dark ? "white" : "black",
          backgroundColor: dark ? "black" : "white",
          padding: "10px",
        }}
      >
        Light / Dark Mode
      </h2>

      <button onClick={() => setDark(!dark)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default App;
