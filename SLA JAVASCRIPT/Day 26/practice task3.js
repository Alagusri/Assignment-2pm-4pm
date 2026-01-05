function showMessage(callback) {
  setTimeout(() => {
    console.log("Message displayed after delay");
    callback();
  }, 1500);
}

showMessage(() => console.log("Callback executed!"));
