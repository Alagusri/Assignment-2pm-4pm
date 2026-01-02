function validateField(value) {
  try {
    if (!value.trim()) throw new Error("Field cannot be empty");
    return "Valid input";
  } catch (err) {
    return err.message;
  }
}

console.log(validateField("Hello"));
console.log(validateField("   "));
