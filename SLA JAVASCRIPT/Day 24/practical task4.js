function loginValidate(user, pass) {
  try {
    if (!user) throw "Username is required";
    if (!pass) throw "Password is required";
    if (pass.length < 5) throw "Password too short";
    return "Login success";
  } catch (err) {
    return "Login Error: " + err;
  }
}

console.log(loginValidate("Sri", "12345"));
console.log(loginValidate("", "12345"));
console.log(loginValidate("Sri", "123"));
