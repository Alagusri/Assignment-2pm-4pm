import Card from "./Card";
import Product from "./ Product";
import Profile from "./Profile";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

      {/* Reusing Card component */}
      <Card>
        <Product name="Laptop" price={55000} />
      </Card>

      <Card>
        <Product name="Mobile" price={25000} />
      </Card>

      <Card>
        <Profile name="Alagusri G" role="UI/UX Designer" />
      </Card>

      <Card>
        <Profile name="John Doe" role="Frontend Developer" />
      </Card>

    </div>
  );
}

export default App;
