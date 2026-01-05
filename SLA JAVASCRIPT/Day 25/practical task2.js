function delayedMessage(msg, delay) {
  setTimeout(() => {
    console.log(msg);
  }, delay);
}

delayedMessage("Hello after 2 seconds", 2000);
