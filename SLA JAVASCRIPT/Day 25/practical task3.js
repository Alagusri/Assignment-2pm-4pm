function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: "Fake API response data" });
    }, 1500);
  });
}

fakeApiCall().then(response => console.log(response));
