function checkNumber(input) {
  try {
    if (isNaN(input)) throw "Not a number!";
    if (input === "") throw "Empty input!";
    return "Valid number";
  } catch (err) {
    return "Error: " + err;
  }
}

console.log(checkNumber("25"));
console.log(checkNumber("abc"));
console.log(checkNumber(""));
