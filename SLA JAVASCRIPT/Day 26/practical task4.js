function loadData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(["HTML", "CSS", "JavaScript", "React"]), 1200);
  });
}

async function displayData() {
  console.log("Loading data...");
  const data = await loadData();
  console.log("Loaded:", data);
}

displayData();
