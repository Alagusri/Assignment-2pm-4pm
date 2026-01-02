function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (err) {
    return err.message;
  }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
