import { useEffect } from "react";

function App() {
  const myName = "Alagusri G";

  useEffect(() => {
    document.title = "My React Mini Project";
  }, []);

  return (
    <div className="container">
      <h1>{myName}</h1>

      <p>This is my first mini React project created using Vite.</p>

      <p>Welcome to my React learning journey 🚀</p>
    </div>
  );
}

export default App;
