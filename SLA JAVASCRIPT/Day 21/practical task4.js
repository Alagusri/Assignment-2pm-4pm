const arr1 = ["HTML", "CSS"];
const arr2 = ["JS", "Python"];

const combined1 = arr1.concat(arr2);
console.log("Using concat:", combined1);

const combined2 = [...arr1, ...arr2];
console.log("Using spread:", combined2);
