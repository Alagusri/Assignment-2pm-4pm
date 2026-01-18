import Button from "./Button";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <h1>React Props Example</h1>

      <Button text="Click Me" />
      <Button text="Submit" />

      <Footer year={2026} />
    </div>
  );
}

export default App;
