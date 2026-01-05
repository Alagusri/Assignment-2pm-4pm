function notifyUser(msg, delay, callback) {
  setTimeout(() => {
    console.log("🔔 Notification:", msg);
    callback();
  }, delay);
}

notifyUser("Your file is ready!", 2000, () => console.log("Notification delivered!"));
