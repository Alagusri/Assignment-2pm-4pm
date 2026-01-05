export function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("API call successful!");
      } else {
        reject("API Failed: Network error");
      }
    }, 800);
  });
}
