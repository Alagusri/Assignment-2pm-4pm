class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display() {
    console.log(this.name, this.rollNo);
  }
}

const s1 = new Student("Sri", 1);
const s2 = new Student("Abi", 2);
const s3 = new Student("Rithvi", 3);

s1.display();
s2.display();
s3.display();
