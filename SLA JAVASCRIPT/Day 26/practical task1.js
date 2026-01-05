function counter() {
  let count = 0;

  return function() {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();
increment();
increment();
increment();
