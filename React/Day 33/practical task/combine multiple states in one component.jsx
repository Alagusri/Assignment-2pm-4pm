import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Multiple States Example</h2>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {name}</p>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br /><br />

      <button onClick={() => setShow(!show)}>Toggle Message</button>
      {show && <p>Hello React 👋</p>}
    </div>
  );
}

export default App;
