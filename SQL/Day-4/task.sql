CREATE DATABASE companydb;

USE companydb;


-- Create Employees Table
CREATE TABLE employees (
    empid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    city VARCHAR(50)
);


-- Insert Employee Records
INSERT INTO employees (name, age, department, salary, city)
VALUES
('Akash', 24, 'IT', 40000, 'Chennai'),
('Vicky', 27, 'HR', 48000, 'Madurai'),
('Bharathi', 30, 'CSE', 45000, 'Chennai'),
('Tamil', 26, 'IT', 50000, 'Salem'),
('Arun', 29, 'Finance', 35000, 'Chennai'),
('Vijay', 32, 'IT', 55000, 'Bangalore'),
('Anitha', 25, 'HR', 38000, 'Madurai'),
('Kavin', 28, 'CSE', 42000, 'Chennai'),
('Ravi', 26, 'CSE', 48000, 'Salem'),
('Priya', 29, 'IT', 46000, 'Chennai');

SELECT * FROM employees;

SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;

SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;

SELECT city, COUNT(*) AS employee_count
FROM employees
GROUP BY city;

SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;

SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department
HAVING SUM(salary) > 100000;

SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 40000;

SELECT
    department,
    COUNT(*) AS employee_count,
    AVG(salary) AS average_salary
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2;

SELECT
    city,
    SUM(salary) AS total_salary,
    MAX(salary) AS maximum_salary
FROM employees
GROUP BY city
HAVING SUM(salary) > 80000;

SELECT
    department,
    COUNT(*) AS total_employees,
    SUM(salary) AS total_salary,
    AVG(salary) AS average_salary,
    MIN(salary) AS minimum_salary,
    MAX(salary) AS maximum_salary
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2
   AND AVG(salary) > 40000
ORDER BY average_salary DESC;