const myPromise = new Promise((resolve) => {
  resolve("Promise resolved successfully!");
});

myPromise.then(res => console.log(res));
