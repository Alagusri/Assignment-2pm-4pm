function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "16px",
      width: "250px"
    }}>
      {children}
    </div>
  );
}

export default Card;
