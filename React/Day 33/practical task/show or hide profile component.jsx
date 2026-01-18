import { useState } from "react";

function Profile() {
  return <h3>👤 Name: Alagusri G</h3>;
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Show / Hide Profile</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Profile
      </button>

      {show && <Profile />}
    </div>
  );
}

export default App;
