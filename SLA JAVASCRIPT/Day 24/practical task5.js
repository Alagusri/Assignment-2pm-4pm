// Wrong logic
function findBiggest(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(findBiggest(10, 20)); // Wrong output


// Correct logic
function findBiggest(a, b) {
  if (a > b) return a;
  else return b;
}

console.log(findBiggest(10, 20)); // Correct output
