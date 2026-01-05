function fakeAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ status: 200, message: "API Success!" }), 1500);
  });
}

fakeAPI().then(res => console.log("API Response:", res));
