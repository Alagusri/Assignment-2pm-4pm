function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data from server");
    }, 1200);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
