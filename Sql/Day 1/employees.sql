CREATE TABLE employees (
emp_id INT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
department VARCHAR(50) NOT NULL,
salary INT NOT NULL
);

INSERT INTO employees (emp_id,name,department,salary) VALUES
(1,'Akhil','IT',25000),
(2,'Rahul','HR',18000),
(3,'Sneha','Finance',35000),
(4,'Anjali','Marketing',22000),
(5,'Vikram','Operations',40000);

SELECT * FROM employees;
