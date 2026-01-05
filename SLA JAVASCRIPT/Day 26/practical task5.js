function loginAPI(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login Successful!");
      } else {
        reject("Invalid Credentials!");
      }
    }, 1500);
  });
}

async function loginFlow() {
  try {
    console.log("Logging in...");
    const res = await loginAPI("admin", "1234");
    console.log(res);
  } catch (err) {
    console.log("Login Error:", err);
  } finally {
    console.log("Login attempt finished.");
  }
}

loginFlow();
