SET SQL_SAFE_UPDATES = 0;
create database StudentINFO;

CREATE TABLE Student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    department VARCHAR(50),
    city VARCHAR(50),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Task 1 – Insert Student
INSERT INTO Student (name, age, department, city) VALUES ('Ravi', 22, 'CSE', 'Chennai');

-- Task 2 – Insert Multiple Students
INSERT INTO Student (name, age, department, city) VALUES('Arun', 23, 'IT', 'Madurai'),('Bala', 21, 'ECE', 'Chennai'),('Priya', 24, 'CSE', 'Coimbatore');

-- Task 3 – Update City
UPDATE Student SET city = 'Bangalore' WHERE id = 2;

-- -- Task 4 – Update Age
UPDATE Student SET age = 25 WHERE id = 3;

-- Task 5 – Update Multiple Columns
UPDATE Student SET age = 24, department = 'IT', city = 'Chennai' WHERE id = 1;

-- Task 6 – Update Using Department
UPDATE Student SET city = 'Madurai' WHERE department = 'CSE';

-- Task 7 – Delete One Student
DELETE FROM Student WHERE id = 4;

-- Task 8 – Delete Using City
DELETE FROM Student WHERE city = 'Salem';

-- Task 9 – Timestamp Update
SELECT id, name, city, updated_at FROM Student WHERE id = 2;


