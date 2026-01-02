function greet(callback) {
  setTimeout(() => {
    console.log("Hello!");
    callback();
  }, 1000);
}

greet(() => console.log("Callback executed after timeout"));
