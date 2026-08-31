const numbers = [10, 20, 30];

const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};


// Array Destructuring
const [num1, num2, num3] = numbers;

console.log("Number 1:", num1);
console.log("Number 2:", num2);
console.log("Number 3:", num3);


// Object Destructuring
const { name, age, course } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);