const dataPromise = new Promise(resolve => {
  setTimeout(() => resolve("Data received"), 1000);
});

async function getData() {
  const res = await dataPromise;
  console.log(res);
}

getData();
