let correctPassword = "1234";
let inputPassword;
let attempt = 0;

do {
  inputPassword = "1234"; 
  attempt++;
  console.log("Attempt " + attempt);

} while (inputPassword !== correctPassword);

console.log("Login Successful");
