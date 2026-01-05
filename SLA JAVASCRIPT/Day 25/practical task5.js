function verifyUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}

async function loginFlow() {
  try {
    const result = await verifyUser("admin", "1234");
    console.log(result);
  } catch (err) {
    console.error("Login failed:", err);
  }
}

loginFlow();
