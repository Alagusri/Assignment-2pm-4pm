import { fetchData } from "./api.js";

// Closure for private state
function createCounter() {
  let count = 0; // private variable
  return {
    increment() {
      return ++count;
    },
    getValue() {
      return count;
    }
  };
}

const counter = createCounter();

document.getElementById("countBtn").addEventListener("click", async () => {
  document.getElementById("status").textContent = "Calling API... (UI not blocked)";
  
  // Update private state using closure
  const newCount = counter.increment();
  document.getElementById("output").textContent = newCount;

  try {
    // Async API call using async/await
    const response = await fetchData();
    document.getElementById("status").textContent = response;
  } catch (error) {
    // Error handling
    document.getElementById("status").textContent = "Error: Something went wrong!";
    console.error("Logged Error →", error);
  }
});
