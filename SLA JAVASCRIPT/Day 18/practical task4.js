let marks = 45;
let grade, remark;

if (marks >= 90) {
  grade = "A";
  remark = "Excellent";
} else if (marks >= 75) {
  grade = "B";
  remark = "Good Job";
} else if (marks >= 50) {
  grade = "C";
  remark = "Can Improve";
} else {
  grade = "Fail";
  remark = "Needs Hard Work";
}

console.log("Marks: " + marks);
console.log("Grade: " + grade);
console.log("Remark: " + remark);
