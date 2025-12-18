class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}

const emp = new Employee("Alice", 40000);
emp.displayInfo();

class Manager extends Employee {

    constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  displayInfo() {

    console.log(`Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`);

  }
}

const mgr = new Manager("Bob", 60000, "IT");
mgr.displayInfo();
