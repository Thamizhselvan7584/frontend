create database Employee_Detailes ;

create table emptable(

empID int primary key auto_increment,
empname varchar (20),
salaray varchar (20),
department varchar (20),
city varchar (20)

);

insert into emptable (empname,salaray,department,city) value 
("Tamil","50000","BCA","Chennai"),
("Vicky","30000","IT","Chennai"),
("Akash","40000","BCA","Mathurai"),
("Bharathi","20000","EEE","Mathurai"),
("Jai","25000","MCA","Salam");


SELECT * FROM employee_detailes.emptable;

SELECT empname, salaray, city FROM emptable;

SELECT * FROM emptable WHERE city = 'Chennai';

SELECT * FROM emptable WHERE salaray > 45000;

SELECT * FROM emptable WHERE salaray >= 40000;

SELECT * FROM emptable WHERE department != "HR";

SELECT * FROM emptable WHERE department ="BCA" and city = "Chennai";

SELECT * FROM emptable WHERE city ="Chennai" or city = "Mathurai";

SELECT * FROM emptable WHERE salaray BETWEEN 35000 AND 50000;