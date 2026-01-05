function fakeLoginAPI(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username) {
        reject("Username cannot be empty");
      } else if (username.length < 4) {
        reject("Username too short");
      } else {
        resolve("Login successful! Welcome " + username);
      }
    }, 1000);
  });
}

document.getElementById("loginBtn").addEventListener("click", async () => {
  const user = document.getElementById("userInput").value;
  const statusBox = document.getElementById("loginStatus");

  try {
    statusBox.textContent = "Logging in...";
    const result = await fakeLoginAPI(user);
    statusBox.textContent = result;
  } catch (err) {
    statusBox.textContent = "Login Error!";
    console.error(err);
  }
});
