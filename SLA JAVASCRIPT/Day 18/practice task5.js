let student = {
  name: "Abdullah",
  age: 22,
  course: "IT"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}
