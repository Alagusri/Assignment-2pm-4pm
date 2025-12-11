function process(arr, cb) {
  arr.forEach(cb);
}

process([1, 2, 3], x => console.log(x * 2));
