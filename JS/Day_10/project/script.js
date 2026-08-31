/**
 * ============================================================================
 * JS LEARNING PLATFORM - CORE JAVASCRIPT ENGINE
 * ============================================================================
 * Beginner-friendly, modular, robust, and interactive JavaScript logic.
 * Contains Curriculum Data, Code Execution Engine, Live Search, Test Scoring,
 * and Persistent LocalStorage Progress Tracking.
 */

// ----------------------------------------------------------------------------
// 1. DATA REPOSITORY: 18 COMPREHENSIVE BEGINNER LESSONS
// ----------------------------------------------------------------------------
const LESSONS_DATA = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        meaning: "JavaScript is a popular programming language used to make websites interactive, dynamic, and smart.",
        syntax: `// Running JavaScript inside the browser\nconsole.log("Hello, World!");`,
        example: `let message = "Welcome to JavaScript!";\nconsole.log(message);`,
        output: `Welcome to JavaScript!`,
        practice: `Write a statement using console.log() to print your name.`
    },
    {
        id: 2,
        title: "Variables",
        meaning: "A variable is like a container or box that stores information (data) in computer memory so we can use it later.",
        syntax: `let variableName = value;`,
        example: `let age = 18;\nlet city = "Chennai";\nconsole.log(city);\nconsole.log(age);`,
        output: `Chennai\n18`,
        practice: `Create a variable named favoriteFood and print its value.`
    },
    {
        id: 3,
        title: "var, let and const",
        meaning: "In modern JavaScript: 'let' is used for variables whose values change, 'const' is for values that never change, and 'var' is the older way which is rarely used now.",
        syntax: `let score = 10;     // can be changed\nconst PI = 3.14;    // cannot be changed`,
        example: `let count = 5;\ncount = 10; // Allowed!\n\nconst birthYear = 2005;\n// birthYear = 2006; // Error! Cannot reassign a const\n\nconsole.log("Count:", count);\nconsole.log("Birth Year:", birthYear);`,
        output: `Count: 10\nBirth Year: 2005`,
        practice: `Declare a const for your country name and a let for your current study hours.`
    },
    {
        id: 4,
        title: "Data Types",
        meaning: "Data types represent the different kinds of values we can work with in JavaScript, such as String (text), Number (digits), Boolean (true/false), and Undefined.",
        syntax: `let text = "Hello";    // String\nlet num = 25;           // Number\nlet isStudent = true;   // Boolean`,
        example: `let studentName = "Priya";\nlet marks = 95.5;\nlet isPassed = true;\n\nconsole.log(typeof studentName);\nconsole.log(typeof marks);\nconsole.log(typeof isPassed);`,
        output: `string\nnumber\nboolean`,
        practice: `Create variables of type string, number, and boolean, and check their types using typeof.`
    },
    {
        id: 5,
        title: "Operators",
        meaning: "Operators are special symbols used to perform operations on variables and values (like addition +, subtraction -, multiplication *, and comparison ==, ===).",
        syntax: `let sum = a + b;\nlet isEqual = (a === b);`,
        example: `let x = 15;\nlet y = 4;\n\nconsole.log("Addition:", x + y);\nconsole.log("Multiplication:", x * y);\nconsole.log("Remainder:", x % y);\nconsole.log("Is x greater than y?", x > y);`,
        output: `Addition: 19\nMultiplication: 60\nRemainder: 3\nIs x greater than y? true`,
        practice: `Calculate the area of a rectangle with length 10 and width 5 using multiplication (*).`
    },
    {
        id: 6,
        title: "if and else",
        meaning: "The if-else statement allows our program to make decisions and execute different code based on whether a condition is true or false.",
        syntax: `if (condition) {\n  // runs when true\n} else {\n  // runs when false\n}`,
        example: `let marks = 75;\n\nif (marks >= 50) {\n  console.log("Congratulations, you passed!");\n} else {\n  console.log("Need to practice more!");\n}`,
        output: `Congratulations, you passed!`,
        practice: `Write an if-else condition to check if a person is eligible to vote (age >= 18).`
    },
    {
        id: 7,
        title: "for Loop",
        meaning: "A for loop is used when you know in advance how many times you want to repeat a block of code.",
        syntax: `for (initialization; condition; increment) {\n  // code to repeat\n}`,
        example: `for (let i = 1; i <= 5; i++) {\n  console.log("Number:", i);\n}`,
        output: `Number: 1\nNumber: 2\nNumber: 3\nNumber: 4\nNumber: 5`,
        practice: `Write a for loop that prints numbers from 10 down to 1 (countdown).`
    },
    {
        id: 8,
        title: "while Loop",
        meaning: "A while loop continues repeating a block of code as long as a specified condition remains true.",
        syntax: `while (condition) {\n  // code\n  // update condition variable\n}`,
        example: `let count = 1;\nwhile (count <= 3) {\n  console.log("Count is: " + count);\n  count++;\n}`,
        output: `Count is: 1\nCount is: 2\nCount is: 3`,
        practice: `Use a while loop to print powers of 2 less than 20 (1, 2, 4, 8, 16).`
    },
    {
        id: 9,
        title: "do...while Loop",
        meaning: "A do...while loop is similar to a while loop, but it is guaranteed to execute the code block at least once before checking the condition.",
        syntax: `do {\n  // runs at least once\n} while (condition);`,
        example: `let number = 10;\ndo {\n  console.log("Value:", number);\n  number++;\n} while (number < 5);`,
        output: `Value: 10`,
        practice: `Write a do...while loop that prints numbers from 1 to 4.`
    },
    {
        id: 10,
        title: "Arrays",
        meaning: "An array is an ordered collection of multiple items stored in a single variable, accessed using zero-based index numbers.",
        syntax: `let list = [item1, item2, item3];`,
        example: `let fruits = ["Apple", "Banana", "Mango"];\nconsole.log(fruits[0]); // First item\nconsole.log(fruits.length); // Total count\n\nfruits.push("Orange"); // Add item\nconsole.log(fruits);`,
        output: `Apple\n3\n[ 'Apple', 'Banana', 'Mango', 'Orange' ]`,
        practice: `Create an array of 4 colors and print the last color.`
    },
    {
        id: 11,
        title: "Objects",
        meaning: "An object is a collection of related data stored as key-value pairs, representing real-world things like a person, book, or product.",
        syntax: `let person = {\n  key1: "value1",\n  key2: "value2"\n};`,
        example: `let student = {\n  name: "Ravi",\n  age: 20,\n  course: "JavaScript"\n};\n\nconsole.log(student.name);\nconsole.log(student["course"]);`,
        output: `Ravi\nJavaScript`,
        practice: `Create a 'book' object with title, author, and price, then print its title.`
    },
    {
        id: 12,
        title: "Functions",
        meaning: "A function is a reusable block of code designed to perform a particular task whenever it is called.",
        syntax: `function functionName(parameter) {\n  return value;\n}`,
        example: `function greet(name) {\n  return "Hello, " + name + "!";\n}\n\nlet welcomeMsg = greet("Kavya");\nconsole.log(welcomeMsg);`,
        output: `Hello, Kavya!`,
        practice: `Write a function named 'add' that takes two numbers and returns their sum.`
    },
    {
        id: 13,
        title: "Function Expression",
        meaning: "A function expression is when you create a function and assign it directly into a variable.",
        syntax: `const myFunc = function(param) {\n  return param;\n};`,
        example: `const multiply = function(a, b) {\n  return a * b;\n};\n\nconsole.log("Multiply result:", multiply(4, 5));`,
        output: `Multiply result: 20`,
        practice: `Create a function expression to calculate the square of a number.`
    },
    {
        id: 14,
        title: "Arrow Functions",
        meaning: "Arrow functions (=>) provide a shorter and cleaner syntax for writing functions introduced in modern ES6 JavaScript.",
        syntax: `const func = (param) => {\n  return param;\n};\n// Or one-liner:\nconst double = n => n * 2;`,
        example: `const square = (num) => num * num;\nconst greetUser = (user) => "Welcome, " + user;\n\nconsole.log(square(6));\nconsole.log(greetUser("Arun"));`,
        output: `36\nWelcome, Arun`,
        practice: `Write an arrow function that takes a number and returns true if it is positive.`
    },
    {
        id: 15,
        title: "Template Literals",
        meaning: "Template literals use backticks (``) instead of quotes, making it easy to embed variables directly into strings using ${variable}.",
        syntax: `let text = \`Hello \${name}, you are \${age} years old\`;`,
        example: `let item = "Laptop";\nlet price = 50000;\n\nconsole.log(\`The price of \${item} is Rs.\${price}.\`);`,
        output: `The price of Laptop is Rs.50000.`,
        practice: `Use template literals to print: "My name is [name] and I am learning [topic]".`
    },
    {
        id: 16,
        title: "Destructuring",
        meaning: "Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables.",
        syntax: `// Array Destructuring\nconst [first, second] = arr;\n\n// Object Destructuring\nconst { name, age } = obj;`,
        example: `// Array destructuring\nconst colors = ["Red", "Green", "Blue"];\nconst [primary, secondary] = colors;\nconsole.log(primary);\n\n// Object destructuring\nconst user = { username: "alex99", role: "admin" };\nconst { username, role } = user;\nconsole.log(username, role);`,
        output: `Red\nalex99 admin`,
        practice: `Destructure latitude and longitude from a coordinate object { lat: 13.08, lng: 80.27 }.`
    },
    {
        id: 17,
        title: "Rest Parameters",
        meaning: "The Rest parameter (...args) allows a function to accept an indefinite number of arguments as an array.",
        syntax: `function sumAll(...numbers) {\n  // numbers is an array\n}`,
        example: `function sumNumbers(...nums) {\n  let total = 0;\n  for (let n of nums) {\n    total += n;\n  }\n  return total;\n}\n\nconsole.log(sumNumbers(1, 2, 3));\nconsole.log(sumNumbers(10, 20, 30, 40));`,
        output: `6\n100`,
        practice: `Create a function that uses rest parameters to print the total count of passed arguments.`
    },
    {
        id: 18,
        title: "Modern JavaScript",
        meaning: "Modern JavaScript (ES6+) includes powerful features like the Spread Operator (...), Optional Chaining (?.), and Nullish Coalescing (??) for cleaner code.",
        syntax: `// Spread operator\nconst combined = [...arr1, ...arr2];\n\n// Optional chaining\nconst city = user?.address?.city;`,
        example: `// 1. Spread Operator with Arrays\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst merged = [...arr1, ...arr2];\nconsole.log("Merged:", merged);\n\n// 2. Optional Chaining\nconst user = { name: "Sara" };\nconsole.log("City:", user.address?.city); // undefined without error!`,
        output: `Merged: [ 1, 2, 3, 4 ]\nCity: undefined`,
        practice: `Use the spread operator to combine two fruit arrays into one.`
    }
];

// ----------------------------------------------------------------------------
// 2. DATA REPOSITORY: 10 INTERACTIVE PRACTICE QUESTIONS
// ----------------------------------------------------------------------------
const PRACTICE_QUESTIONS = [
    {
        id: 1,
        title: "1. Print numbers from 1 to 10",
        instruction: "Write a program using a loop to print numbers from 1 to 10 in the console.",
        starterCode: `// Write a loop to print 1 to 10\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`,
        solution: `for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`
    },
    {
        id: 2,
        title: "2. Print even numbers from 1 to 50",
        instruction: "Write a program to display only the even numbers between 1 and 50.",
        starterCode: `// Print even numbers between 1 and 50\nfor (let i = 2; i <= 50; i += 2) {\n  console.log(i);\n}`,
        solution: `for (let i = 1; i <= 50; i++) {\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}`
    },
    {
        id: 3,
        title: "3. Find factorial of a number",
        instruction: "Calculate the factorial of 5 (5! = 5 * 4 * 3 * 2 * 1 = 120).",
        starterCode: `let num = 5;\nlet fact = 1;\n\n// Write logic here\nfor (let i = 1; i <= num; i++) {\n  fact *= i;\n}\nconsole.log("Factorial of " + num + " is: " + fact);`,
        solution: `let num = 5;\nlet fact = 1;\nfor (let i = 1; i <= num; i++) {\n  fact *= i;\n}\nconsole.log(fact);`
    },
    {
        id: 4,
        title: "4. Reverse a string",
        instruction: "Take the string 'javascript' and print it in reverse order ('tpircsavaj').",
        starterCode: `let str = "javascript";\nlet reversed = "";\n\n// Write logic here\nfor (let i = str.length - 1; i >= 0; i--) {\n  reversed += str[i];\n}\nconsole.log(reversed);`,
        solution: `let str = "javascript";\nlet reversed = str.split("").reverse().join("");\nconsole.log(reversed);`
    },
    {
        id: 5,
        title: "5. Find the highest number in an array",
        instruction: "Given an array of numbers, find and print the largest element.",
        starterCode: `let numbers = [12, 45, 78, 23, 89, 56];\nlet max = numbers[0];\n\nfor (let i = 1; i < numbers.length; i++) {\n  if (numbers[i] > max) {\n    max = numbers[i];\n  }\n}\nconsole.log("Highest number is:", max);`,
        solution: `let numbers = [12, 45, 78, 23, 89, 56];\nlet max = Math.max(...numbers);\nconsole.log(max);`
    },
    {
        id: 6,
        title: "6. Find the sum of array elements",
        instruction: "Calculate the total sum of all numbers in the given array.",
        starterCode: `let list = [10, 20, 30, 40, 50];\nlet sum = 0;\n\nfor (let n of list) {\n  sum += n;\n}\nconsole.log("Sum of elements:", sum);`,
        solution: `let list = [10, 20, 30, 40, 50];\nlet sum = list.reduce((total, val) => total + val, 0);\nconsole.log(sum);`
    },
    {
        id: 7,
        title: "7. Find odd numbers from 1 to 20",
        instruction: "Iterate from 1 to 20 and print only the odd numbers.",
        starterCode: `for (let i = 1; i <= 20; i++) {\n  if (i % 2 !== 0) {\n    console.log(i);\n  }\n}`,
        solution: `for (let i = 1; i <= 20; i += 2) {\n  console.log(i);\n}`
    },
    {
        id: 8,
        title: "8. Check whether a number is even or odd",
        instruction: "Given a number, print whether it is 'Even' or 'Odd'.",
        starterCode: `let n = 27;\n\nif (n % 2 === 0) {\n  console.log(n + " is Even");\n} else {\n  console.log(n + " is Odd");\n}`,
        solution: `let n = 27;\nconsole.log(n % 2 === 0 ? "Even" : "Odd");`
    },
    {
        id: 9,
        title: "9. Find the largest of three numbers",
        instruction: "Compare variables a, b, and c and print the largest one.",
        starterCode: `let a = 45, b = 72, c = 38;\nlet largest;\n\nif (a >= b && a >= c) {\n  largest = a;\n} else if (b >= a && b >= c) {\n  largest = b;\n} else {\n  largest = c;\n}\nconsole.log("Largest number is:", largest);`,
        solution: `let a = 45, b = 72, c = 38;\nconsole.log(Math.max(a, b, c));`
    },
    {
        id: 10,
        title: "10. Check palindrome string",
        instruction: "Check whether a word (like 'madam' or 'racecar') reads the same forwards and backwards.",
        starterCode: `let word = "racecar";\nlet rev = word.split("").reverse().join("");\n\nif (word === rev) {\n  console.log(word + " is a Palindrome");\n} else {\n  console.log(word + " is Not a Palindrome");\n}`,
        solution: `let word = "racecar";\nlet isPal = word === word.split("").reverse().join("");\nconsole.log(isPal ? "Palindrome" : "Not Palindrome");`
    }
];

// ----------------------------------------------------------------------------
// 3. DATA REPOSITORY: 10 NEW LOGICAL QUESTIONS & ANSWERS (ES6+)
// ----------------------------------------------------------------------------
const LOGICAL_QUESTIONS = [
    {
        id: 1,
        questionNumber: "Question 1",
        subtitle: "Var, Let and Const",
        question: "Explain the difference between var, let, and const based on scope, redeclaration, reassignment, hoisting, and TDZ. Write a JavaScript program that demonstrates these differences with simple examples.",
        answerText: "In JavaScript, 'var' is function-scoped and can be redeclared and reassigned. 'let' and 'const' are block-scoped ({}) and cannot be redeclared in the same scope. 'let' allows reassignment, whereas 'const' cannot be reassigned. 'var' is hoisted with 'undefined', while 'let' and 'const' are hoisted into a Temporal Dead Zone (TDZ) and cannot be accessed before declaration.",
        code: `// 1. Scope and Reassignment Demonstration
function scopeDemo() {
  if (true) {
    var x = 10;     // Function-scoped
    let y = 20;     // Block-scoped
    const z = 30;   // Block-scoped & constant

    y = 25;         // Allowed: let can be reassigned
    // z = 35;      // Error: const cannot be reassigned
    console.log("Inside block - y:", y, "z:", z);
  }

  console.log("Outside block - x:", x); // 10 (var leaked outside block)
  // console.log(y); // ReferenceError: y is not defined outside block
}

scopeDemo();

// 2. Hoisting and Temporal Dead Zone (TDZ)
console.log("Hoisted var a:", a); // undefined (hoisted & initialized)
var a = 100;

// Accessing let before declaration triggers TDZ:
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 200;
console.log("Initialized let b:", b);`,
        output: `Inside block - y: 25 z: 30
Outside block - x: 10
Hoisted var a: undefined
Initialized let b: 200`,
        explanation: "1. Scope: 'var' ignores block boundaries ({}) and attaches to the function scope, while 'let' and 'const' stay confined inside their block.\n2. Reassignment: 'var' and 'let' allow changing values; 'const' prevents reassignment.\n3. Hoisting & TDZ: 'var' is initialized to undefined during compilation. 'let' and 'const' exist in memory but remain inaccessible in the Temporal Dead Zone (TDZ) until the code reaches their declaration line."
    },
    {
        id: 2,
        questionNumber: "Question 2",
        subtitle: "Normal Function and Arrow Function",
        question: "Convert the following normal functions into arrow functions. Show both explicit return and implicit return.\n\nCode:\nfunction add(a, b) {\n  return a + b;\n}\n\nfunction square(n) {\n  return n * n;\n}",
        answerText: "Arrow functions (=>) offer a compact syntax. When using curly brackets {}, we must use an explicit 'return'. If the body has only one expression, we can remove the brackets and return keyword for an implicit return.",
        code: `// 1. Normal Functions (ES5)
function addNormal(a, b) {
  return a + b;
}

function squareNormal(n) {
  return n * n;
}

// 2. Arrow Functions with Explicit Return (uses {} and return)
const addExplicit = (a, b) => {
  return a + b;
};

const squareExplicit = (n) => {
  return n * n;
};

// 3. Arrow Functions with Implicit Return (one-liner, no {} and no return)
const addImplicit = (a, b) => a + b;
const squareImplicit = n => n * n;

// Testing all functions
console.log("Normal Add:", addNormal(5, 3));
console.log("Explicit Arrow Add:", addExplicit(5, 3));
console.log("Implicit Arrow Add:", addImplicit(5, 3));

console.log("Normal Square:", squareNormal(4));
console.log("Explicit Arrow Square:", squareExplicit(4));
console.log("Implicit Arrow Square:", squareImplicit(4));`,
        output: `Normal Add: 8
Explicit Arrow Add: 8
Implicit Arrow Add: 8
Normal Square: 16
Explicit Arrow Square: 16
Implicit Arrow Square: 16`,
        explanation: "1. Explicit Return: When curly braces {} are included in an arrow function, JavaScript requires the 'return' keyword to return a value.\n2. Implicit Return: When you omit the curly braces {}, JavaScript automatically returns the evaluated value of that single expression."
    },
    {
        id: 3,
        questionNumber: "Question 3",
        subtitle: "Array and Object Destructuring",
        question: "Using the following data, extract values using array destructuring and object destructuring.\n\nCode:\nconst numbers = [10, 20, 30];\nconst student = {\n  name: \"Ravi\",\n  age: 25,\n  course: \"JavaScript\"\n};\n\nExtract and display:\n- 20 from the array\n- name and course from the object",
        answerText: "Destructuring unpacks values from arrays or properties from objects into distinct variables in a clean, single-line syntax.",
        code: `const numbers = [10, 20, 30];

const student = {
  name: "Ravi",
  age: 25,
  course: "JavaScript"
};

// 1. Array Destructuring to extract the second element (20)
const [, secondValue] = numbers;

// 2. Object Destructuring to extract name and course
const { name, course } = student;

// Displaying extracted values
console.log("Extracted Array Value:", secondValue);
console.log("Student Name:", name);
console.log("Student Course:", course);`,
        output: `Extracted Array Value: 20
Student Name: Ravi
Student Course: JavaScript`,
        explanation: "1. Array destructuring is position-based. By putting a comma [, secondValue], we skip the first element (10) and extract 20.\n2. Object destructuring is key-based. The variable names { name, course } directly match the property names inside the student object."
    },
    {
        id: 4,
        questionNumber: "Question 4",
        subtitle: "Rest Parameter and Spread Syntax",
        question: "Explain the difference between Rest Parameter and Spread Syntax. Write one program using Rest Parameter and another program using Spread Syntax. Show the code, output and simple explanation.",
        answerText: "The Rest parameter (...args) collects multiple individual arguments into a single array inside function definitions. The Spread syntax (...arr) unpacks or expands an existing array or object into individual elements.",
        code: `// 1. Rest Parameter Program: Collects unknown count of arguments into an array
function calculateSum(...numbers) {
  // 'numbers' is received as a real array: [10, 20, 30]
  return numbers.reduce((total, current) => total + current, 0);
}

const totalScore = calculateSum(10, 20, 30);
console.log("Rest Parameter Sum:", totalScore);


// 2. Spread Syntax Program: Unpacks array elements to merge arrays
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Express"];

// Spreading both arrays into a new combined array
const fullStack = [...frontEnd, ...backEnd, "MongoDB"];
console.log("Spread Syntax Merged Array:", fullStack);`,
        output: `Rest Parameter Sum: 60
Spread Syntax Merged Array: [ 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB' ]`,
        explanation: "1. Rest Parameter: Used in function parameters to bundle separate incoming items together into one array.\n2. Spread Syntax: Used in expressions to expand an existing array/object into separate individual items."
    },
    {
        id: 5,
        questionNumber: "Question 5",
        subtitle: "Default Parameters and Template Literals",
        question: "Create a function that accepts name, course and city. Give \"Chennai\" as the default value for city. Use a template literal to create the output.\n\nExample output: \"My name is Ravi. I am learning JavaScript in Chennai.\"\nAlso show what happens when city is not passed.",
        answerText: "Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed. Template literals (``) allow embedding variables cleanly using ${}.",
        code: `// Function with a default parameter for 'city'
function getStudentBio(name, course, city = "Chennai") {
  // Using template literals with backticks and \${}
  return \`My name is \${name}. I am learning \${course} in \${city}.\`;
}

// 1. Calling the function WITHOUT passing the city (uses default "Chennai")
const defaultResult = getStudentBio("Ravi", "JavaScript");
console.log("Without City argument:", defaultResult);

// 2. Calling the function WITH a custom city passed
const customResult = getStudentBio("Ravi", "JavaScript", "Madurai");
console.log("With City argument:", customResult);`,
        output: `Without City argument: My name is Ravi. I am learning JavaScript in Chennai.
With City argument: My name is Ravi. I am learning JavaScript in Madurai.`,
        explanation: "1. Default Parameter: When the 3rd argument 'city' is omitted in getStudentBio('Ravi', 'JavaScript'), JavaScript automatically assigns the default value 'Chennai'.\n2. Template Literals: Backticks (``) allow string interpolation with ${variable} without needing string concatenation (+)."
    },
    {
        id: 6,
        questionNumber: "Question 6",
        subtitle: "JavaScript Classes and Objects",
        question: "Create a Student class with name, age, mark. Create a displayDetails() method. Create two student objects and display their details. Use modern JavaScript class syntax.",
        answerText: "ES6 classes act as blueprints for creating objects with shared properties and methods using constructor functions and instance methods.",
        code: `// Defining the Student class
class Student {
  constructor(name, age, mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;
  }

  // Method to display student details
  displayDetails() {
    console.log(\`Student Details -> Name: \${this.name} | Age: \${this.age} | Mark: \${this.mark}\`);
  }
}

// Creating two student objects using the 'new' keyword
const student1 = new Student("Ravi", 20, 92);
const student2 = new Student("Priya", 22, 98);

// Displaying their details
student1.displayDetails();
student2.displayDetails();`,
        output: `Student Details -> Name: Ravi | Age: 20 | Mark: 92
Student Details -> Name: Priya | Age: 22 | Mark: 98`,
        explanation: "1. The 'class' keyword defines a reusable template.\n2. The 'constructor' runs automatically whenever a new object is instantiated with 'new Student()'.\n3. 'this' refers to the specific instance of the object being created."
    },
    {
        id: 7,
        questionNumber: "Question 7",
        subtitle: "Promises and Async/Await",
        question: "Create a Promise that displays \"Data Loaded\" after a delay. Handle the Promise in two ways:\n1. Using .then()\n2. Using async/await\nShow both examples separately with output.",
        answerText: "A Promise represents an asynchronous operation that will complete in the future. We can handle resolved promises either with the classic .then() callback chain or with modern async/await syntax.",
        code: `// Function returning a Promise that resolves after a 500ms delay
function fetchServerData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 500);
  });
}

// 1. Handling the Promise using .then()
fetchServerData().then((response) => {
  console.log("1. Handled using .then():", response);
});

// 2. Handling the Promise using async/await
async function handleWithAsyncAwait() {
  const response = await fetchServerData();
  console.log("2. Handled using async/await:", response);
}

handleWithAsyncAwait();`,
        output: `1. Handled using .then(): Data Loaded
2. Handled using async/await: Data Loaded`,
        explanation: "1. .then(): Takes a callback function that runs as soon as the Promise resolves successfully.\n2. async/await: 'async' makes a function return a promise, and 'await' pauses execution until the promise settles, making asynchronous code look clean and synchronous."
    },
    {
        id: 8,
        questionNumber: "Question 8",
        subtitle: "Optional Chaining and Nullish Coalescing",
        question: "Given the following object:\nconst user = {\n  name: \"Ravi\"\n};\n\nUse optional chaining (?.) and nullish coalescing (??) to access the city. If the city does not exist, display: \"City Not Available\".",
        answerText: "Optional chaining (?.) safely reads deeply nested properties without throwing errors if an intermediate property is null or undefined. Nullish coalescing (??) provides a fallback value when the left side is null or undefined.",
        code: `const user = {
  name: "Ravi"
};

// Safely accessing user.address.city using ?. and providing fallback using ??
const userCity = user?.address?.city ?? "City Not Available";

console.log("User Name:", user.name);
console.log("User City:", userCity);`,
        output: `User Name: Ravi
User City: City Not Available`,
        explanation: "1. Without '?.' attempting to read user.address.city would throw a TypeError because 'user.address' is undefined.\n2. With '?.', user?.address?.city safely returns 'undefined' without crashing.\n3. The '??' operator checks if the result is null/undefined, and since it is, it returns 'City Not Available'."
    },
    {
        id: 9,
        questionNumber: "Question 9",
        subtitle: "ES6 Array Methods (filter, find, includes, map)",
        question: "Using the following array:\nconst numbers = [10, 25, 30, 45, 50, 65];\n\nUse suitable ES6+ array methods to:\n1. Find numbers greater than 30\n2. Find the first number greater than 40\n3. Check whether 50 exists\n4. Create a new array containing doubled values\n\nUse: filter(), find(), includes(), map().",
        answerText: "Modern ES6+ array methods offer expressive, non-mutating functional ways to filter, search, test, and transform array items.",
        code: `const numbers = [10, 25, 30, 45, 50, 65];

// 1. filter() - Returns ALL numbers greater than 30
const greaterThan30 = numbers.filter(n => n > 30);
console.log("1. Numbers > 30 (filter):", greaterThan30);

// 2. find() - Returns the FIRST number greater than 40
const firstGreaterThan40 = numbers.find(n => n > 40);
console.log("2. First number > 40 (find):", firstGreaterThan40);

// 3. includes() - Checks if 50 exists in the array (returns boolean)
const hasFifty = numbers.includes(50);
console.log("3. Does 50 exist? (includes):", hasFifty);

// 4. map() - Returns a new array with every number doubled
const doubledNumbers = numbers.map(n => n * 2);
console.log("4. Doubled Array (map):", doubledNumbers);`,
        output: `1. Numbers > 30 (filter): [ 45, 50, 65 ]
2. First number > 40 (find): 45
3. Does 50 exist? (includes): true
4. Doubled Array (map): [ 20, 50, 60, 90, 100, 130 ]`,
        explanation: "1. filter(): Iterates through all items and collects all elements that meet the condition into a new array.\n2. find(): Stops at and returns the very first element satisfying the test function.\n3. includes(): Returns true if the exact search element is found in the array, otherwise false.\n4. map(): Iterates over every element, applies the calculation, and returns a new array with the transformed values."
    },
    {
        id: 10,
        questionNumber: "Question 10",
        subtitle: "ES5 to ES6+ Code Modernization",
        question: "Convert the following ES5 code into modern ES6+ JavaScript.\n\nOriginal ES5 code:\nvar name = \"Ravi\";\nvar age = 25;\n\nvar student = {\n  name: name,\n  age: age\n};\n\nvar greet = function(name) {\n  return \"Hello \" + name;\n};\n\nconsole.log(greet(name));\n\nConvert using: const/let, Template literals, Object shorthand, Arrow functions.",
        answerText: "Modern ES6+ makes JavaScript code shorter, safer, and more readable by utilizing const/let, object property shorthand, arrow functions, and template literals.",
        code: `// ----------------------------------------
// 1. Original ES5 Version:
// ----------------------------------------
/*
var name = "Ravi";
var age = 25;
var student = { name: name, age: age };
var greet = function(name) { return "Hello " + name; };
console.log(greet(name));
*/

// ----------------------------------------
// 2. Modern ES6+ Version:
// ----------------------------------------
const name = "Ravi";
const age = 25;

// Object Property Shorthand (no need to repeat name: name)
const student = { name, age };

// Arrow Function with Template Literals
const greet = userName => \`Hello \${userName}\`;

console.log(greet(name));
console.log("Student Object:", student);`,
        output: `Hello Ravi
Student Object: { name: 'Ravi', age: 25 }`,
        explanation: "Advantages of the ES6+ version:\n1. 'const' prevents accidental variable reassignments and avoids var hoisting bugs.\n2. Object shorthand ({ name, age }) eliminates redundant key-value typing when property and variable names match.\n3. Arrow functions provide concise one-line syntax without boilerplate function keywords.\n4. Template literals (\`Hello \${userName}\`) eliminate string concatenation errors and improve readability."
    }
];

// ----------------------------------------------------------------------------
// 4. DATA REPOSITORY: 15 BASIC JAVASCRIPT TEST QUESTIONS
// ----------------------------------------------------------------------------
const TEST_QUESTIONS = [
    {
        id: 1,
        topic: "var, let and const",
        question: "Which keyword is used in modern JavaScript to declare a variable that CANNOT be reassigned?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2,
        explanation: "'const' creates a block-scoped constant reference that cannot be reassigned after its declaration."
    },
    {
        id: 2,
        topic: "for loop",
        question: "What will be printed by: for (let i = 0; i < 3; i++) { console.log(i); }?",
        options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"],
        correctIndex: 1,
        explanation: "The loop starts at 0 and stops when i reaches 3 (running for 0, 1, and 2)."
    },
    {
        id: 3,
        topic: "while loop",
        question: "When is the condition checked in a standard 'while' loop?",
        options: ["After executing the loop body", "Before executing the loop body", "Only at the end of the script", "Never"],
        correctIndex: 1,
        explanation: "A 'while' loop evaluates its condition *before* executing the statements inside the body."
    },
    {
        id: 4,
        topic: "do...while loop",
        question: "How many times will a 'do...while' loop run if its condition is initially false?",
        options: ["0 times", "At least 1 time", "Infinitely", "Throws an error"],
        correctIndex: 1,
        explanation: "'do...while' executes the code block once first before checking the while condition."
    },
    {
        id: 5,
        topic: "strings",
        question: "What is the output of 'Hello'.length?",
        options: ["4", "5", "6", "undefined"],
        correctIndex: 1,
        explanation: "'Hello' contains exactly 5 characters."
    },
    {
        id: 6,
        topic: "arrays",
        question: "Which array method adds a new element to the END of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correctIndex: 1,
        explanation: ".push() appends new elements to the end of an array."
    },
    {
        id: 7,
        topic: "objects",
        question: "How do you access the 'age' property of an object 'student'?",
        options: ["student(age)", "student->age", "student.age", "student:age"],
        correctIndex: 2,
        explanation: "Dot notation (student.age) or bracket notation (student['age']) is used to access object properties."
    },
    {
        id: 8,
        topic: "functions",
        question: "What does a function return if no 'return' statement is specified?",
        options: ["null", "0", "false", "undefined"],
        correctIndex: 3,
        explanation: "By default, JavaScript functions return 'undefined' when no value is returned explicitly."
    },
    {
        id: 9,
        topic: "arrow functions",
        question: "Which of the following correctly defines an arrow function?",
        options: [
            "const add = (a, b) => a + b;",
            "function add(a, b) => a + b;",
            "const add = function -> (a, b);",
            "arrow add(a, b) { return a + b; }"
        ],
        correctIndex: 0,
        explanation: "Arrow functions use the '() =>' syntax."
    },
    {
        id: 10,
        topic: "hoisting",
        question: "What happens when you access a 'var' variable before declaring it?",
        options: [
            "Throws ReferenceError",
            "It gives 'undefined'",
            "It gives 0",
            "The browser crashes"
        ],
        correctIndex: 1,
        explanation: "'var' declarations are hoisted and initialized with 'undefined', unlike let/const."
    },
    {
        id: 11,
        topic: "destructuring",
        question: "Given: const [a, b] = [10, 20]; What is the value of 'b'?",
        options: ["10", "20", "[10, 20]", "undefined"],
        correctIndex: 1,
        explanation: "Positional array destructuring maps 'a' to 10 and 'b' to 20."
    },
    {
        id: 12,
        topic: "rest parameters",
        question: "What syntax represents rest parameters in a function definition?",
        options: ["...args", "args...", "@args", "&&args"],
        correctIndex: 0,
        explanation: "The three dots (...args) prefix denotes rest parameters."
    },
    {
        id: 13,
        topic: "optional chaining",
        question: "What is the purpose of optional chaining (?.) in modern JS?",
        options: [
            "To chain multiple functions together",
            "To safely access nested properties without throwing errors if null/undefined",
            "To perform mathematical comparisons",
            "To check if an array contains duplicates"
        ],
        correctIndex: 1,
        explanation: "Optional chaining (?.) stops execution and safely returns 'undefined' if the reference is nullish."
    },
    {
        id: 14,
        topic: "template literals",
        question: "Which quotation marks are required for Template Literals?",
        options: ["Single quotes ''", "Double quotes \"\"", "Backticks ``", "Angle brackets <>"],
        correctIndex: 2,
        explanation: "Template literals must be enclosed inside backticks (``)."
    },
    {
        id: 15,
        topic: "data types",
        question: "What is the result of typeof NaN in JavaScript?",
        options: ["'nan'", "'undefined'", "'number'", "'object'"],
        correctIndex: 2,
        explanation: "In JavaScript, NaN (Not-a-Number) is technically of type 'number'."
    }
];

// ----------------------------------------------------------------------------
// 5. LOCALSTORAGE STATE MANAGER
// ----------------------------------------------------------------------------
const STORAGE_KEYS = {
    LESSONS: "js_platform_completed_lessons",
    PRACTICE: "js_platform_completed_practice",
    LOGICAL: "js_platform_completed_logical",
    TEST_SCORE: "js_platform_test_score",
    THEME: "js_platform_theme"
};

function getCompletedLessons() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.LESSONS)) || [];
    } catch { return []; }
}

function getCompletedPractice() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.PRACTICE)) || [];
    } catch { return []; }
}

function getCompletedLogical() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.LOGICAL)) || [];
    } catch { return []; }
}

function getSavedTestScore() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.TEST_SCORE)) || null;
    } catch { return null; }
}

// ----------------------------------------------------------------------------
// 6. SAFE IN-BROWSER CODE RUNNER
// ----------------------------------------------------------------------------
function executeJavaScriptCode(codeString) {
    let logs = [];
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;
    const originalInfo = console.info;

    try {
        console.log = (...args) => {
            logs.push(args.map(formatConsoleArg).join(" "));
        };
        console.info = (...args) => {
            logs.push(args.map(formatConsoleArg).join(" "));
        };
        console.warn = (...args) => {
            logs.push("[WARN] " + args.map(formatConsoleArg).join(" "));
        };
        console.error = (...args) => {
            logs.push("[ERROR] " + args.map(formatConsoleArg).join(" "));
        };

        const runner = new Function(codeString);
        const result = runner();

        if (logs.length === 0 && result !== undefined) {
            logs.push(formatConsoleArg(result));
        }

        if (logs.length === 0) {
            return "Code executed successfully (No output logged).";
        }

        return logs.join("\n");
    } catch (err) {
        return "❌ Error: " + err.message;
    } finally {
        console.log = originalLog;
        console.warn = originalWarn;
        console.error = originalError;
        console.info = originalInfo;
    }
}

function formatConsoleArg(arg) {
    if (arg === null) return "null";
    if (arg === undefined) return "undefined";
    if (typeof arg === "object") {
        try {
            return JSON.stringify(arg, null, 2);
        } catch {
            return String(arg);
        }
    }
    return String(arg);
}

// ----------------------------------------------------------------------------
// 7. INITIALIZATION & NAVIGATION SYSTEM
// ----------------------------------------------------------------------------
let currentLessonIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderLessonButtons();
    renderActiveLesson(0);
    renderPracticeQuestions();
    renderLogicalQuestions();
    renderTestQuestions();
    updateAllProgress();
    setupSearch();
    setupSidebarToggle();
    loadDailyTip();

    // Default Sandbox Code
    document.getElementById("sandbox-code-input").value = `let name = "Ravi";\nconsole.log(name);\nconsole.log("Welcome to JavaScript practice!");`;
});

function navigateTo(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(sec => sec.classList.remove("active"));

    const targetSection = document.getElementById("section-" + sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        if (item.getAttribute("data-section") === sectionId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("mobile-open")) {
        sidebar.classList.remove("mobile-open");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ----------------------------------------------------------------------------
// 8. THEME TOGGLE (DARK / LIGHT MODE)
// ----------------------------------------------------------------------------
function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
    applyTheme(savedTheme);

    document.getElementById("theme-toggle-btn").addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    });
}

function applyTheme(theme) {
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");

    if (theme === "light") {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        themeIcon.textContent = "🌙";
        themeText.textContent = "Dark Mode";
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        themeIcon.textContent = "☀️";
        themeText.textContent = "Light Mode";
    }
}

function setupSidebarToggle() {
    const toggleBtn = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("sidebar");

    toggleBtn.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle("mobile-open");
        } else {
            sidebar.classList.toggle("collapsed");
        }
    });
}

// ----------------------------------------------------------------------------
// 9. LESSONS LOGIC
// ----------------------------------------------------------------------------
function renderLessonButtons() {
    const container = document.getElementById("lesson-index-buttons");
    const completed = getCompletedLessons();
    container.innerHTML = "";

    LESSONS_DATA.forEach((lesson, index) => {
        const btn = document.createElement("button");
        btn.className = `lesson-idx-btn ${index === currentLessonIndex ? "active" : ""} ${completed.includes(lesson.id) ? "completed" : ""}`;
        btn.innerHTML = `<span>${index + 1}. ${lesson.title}</span>`;
        btn.onclick = () => {
            renderActiveLesson(index);
        };
        container.appendChild(btn);
    });
}

function renderActiveLesson(index) {
    currentLessonIndex = index;
    const lesson = LESSONS_DATA[index];
    const completed = getCompletedLessons();
    const isCompleted = completed.includes(lesson.id);

    renderLessonButtons();

    const container = document.getElementById("active-lesson-container");
    container.innerHTML = `
        <div class="lesson-card">
            <div class="lesson-meta">
                <span class="lesson-num-badge">Lesson ${index + 1} of ${LESSONS_DATA.length}</span>
                <button class="btn btn-sm ${isCompleted ? 'btn-success' : 'btn-outline'}" onclick="toggleLessonComplete(${lesson.id})">
                    ${isCompleted ? '✓ Completed' : 'Mark as Completed'}
                </button>
            </div>

            <h2 class="lesson-title">${lesson.title}</h2>

            <div class="lesson-block">
                <div class="lesson-heading">📖 Meaning</div>
                <p class="lesson-text">${lesson.meaning}</p>
            </div>

            <div class="lesson-block">
                <div class="lesson-heading">⚙️ Syntax</div>
                <div class="syntax-box">${escapeHtml(lesson.syntax)}</div>
            </div>

            <div class="lesson-block">
                <div class="lesson-heading">💻 Example Code</div>
                <div class="code-display-box">
                    <div class="code-display-header">
                        <span>example.js</span>
                        <button class="btn btn-xs btn-outline" onclick="loadLessonIntoSandbox(${index})">
                            Try in Editor ↗
                        </button>
                    </div>
                    <pre class="code-display-body">${escapeHtml(lesson.example)}</pre>
                </div>
            </div>

            <div class="lesson-block">
                <div class="lesson-heading">🎯 Output</div>
                <div class="output-display-box">${escapeHtml(lesson.output)}</div>
            </div>

            <div class="lesson-block">
                <div class="lesson-heading">✍️ Practice Question</div>
                <div class="practice-prompt-box">
                    <p><strong>Challenge:</strong> ${lesson.practice}</p>
                    <button class="btn btn-sm btn-primary" onclick="loadLessonPractice(${index})">
                        Solve in Code Practice 💻
                    </button>
                </div>
            </div>

            <div class="lesson-footer-nav">
                <button class="btn btn-outline" ${index === 0 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''} onclick="renderActiveLesson(${index - 1})">
                    ← Previous Lesson
                </button>
                <button class="btn btn-primary" onclick="${index === LESSONS_DATA.length - 1 ? "navigateTo('practice')" : `renderActiveLesson(${index + 1})`}">
                    ${index === LESSONS_DATA.length - 1 ? 'Go to Practice Questions 🚀' : 'Next Lesson →'}
                </button>
            </div>
        </div>
    `;
}

function toggleLessonComplete(lessonId) {
    let completed = getCompletedLessons();
    if (completed.includes(lessonId)) {
        completed = completed.filter(id => id !== lessonId);
    } else {
        completed.push(lessonId);
    }
    localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(completed));
    renderActiveLesson(currentLessonIndex);
    updateAllProgress();
}

function loadLessonIntoSandbox(index) {
    const lesson = LESSONS_DATA[index];
    document.getElementById("sandbox-code-input").value = lesson.example;
    navigateTo("sandbox");
    runSandboxCode();
}

function loadLessonPractice(index) {
    const lesson = LESSONS_DATA[index];
    document.getElementById("sandbox-code-input").value = `// Lesson Practice: ${lesson.title}\n// ${lesson.practice}\n\n`;
    navigateTo("sandbox");
}

// ----------------------------------------------------------------------------
// 10. CODE PRACTICE (INTERACTIVE SANDBOX)
// ----------------------------------------------------------------------------
function runSandboxCode() {
    const code = document.getElementById("sandbox-code-input").value;
    const outputContainer = document.getElementById("sandbox-output-display");
    const result = executeJavaScriptCode(code);

    outputContainer.innerHTML = "";
    const lines = result.split("\n");
    lines.forEach(line => {
        const div = document.createElement("div");
        div.className = line.startsWith("❌ Error:") ? "console-line console-error" : "console-line";
        div.textContent = line;
        outputContainer.appendChild(div);
    });
}

function clearSandboxCode() {
    document.getElementById("sandbox-code-input").value = "";
    document.getElementById("sandbox-code-input").focus();
}

function resetSandboxCode() {
    document.getElementById("sandbox-code-input").value = `let name = "Ravi";\nconsole.log(name);\nconsole.log("Welcome to JavaScript!");`;
    runSandboxCode();
}

function clearSandboxOutput() {
    document.getElementById("sandbox-output-display").innerHTML = `<div class="console-empty-msg">Console cleared.</div>`;
}

function loadCodePreset(presetKey) {
    const textarea = document.getElementById("sandbox-code-input");
    const presets = {
        hello: `let name = "Ravi";\nconsole.log(name);\nconsole.log("Happy Coding!");`,
        sum: `function sum(a, b) {\n  return a + b;\n}\nconsole.log("5 + 15 =", sum(5, 15));`,
        loop: `for (let i = 1; i <= 5; i++) {\n  console.log("Iteration number:", i);\n}`,
        array: `let languages = ["JavaScript", "Python", "HTML", "CSS"];\nlanguages.push("TypeScript");\nconsole.log("Total languages:", languages.length);\nconsole.log(languages);`,
        object: `let car = {\n  brand: "Tesla",\n  model: "Model 3",\n  year: 2024\n};\nconsole.log(car.brand, car.model);`,
        arrow: `const multiply = (x, y) => x * y;\nconsole.log("Result:", multiply(6, 7));`
    };
    if (presets[presetKey]) {
        textarea.value = presets[presetKey];
        runSandboxCode();
    }
}

// ----------------------------------------------------------------------------
// 11. PRACTICE QUESTIONS SECTION
// ----------------------------------------------------------------------------
function renderPracticeQuestions() {
    const container = document.getElementById("practice-questions-container");
    const completed = getCompletedPractice();
    container.innerHTML = "";

    PRACTICE_QUESTIONS.forEach(pq => {
        const isDone = completed.includes(pq.id);
        const card = document.createElement("div");
        card.className = `question-card ${isDone ? 'completed' : ''}`;
        card.id = `practice-card-${pq.id}`;

        card.innerHTML = `
            <div class="question-card-header">
                <h3 class="question-title">${pq.title}</h3>
                <button class="btn btn-sm ${isDone ? 'btn-success' : 'btn-outline'}" onclick="togglePracticeComplete(${pq.id})">
                    ${isDone ? '✓ Solved' : 'Mark Solved'}
                </button>
            </div>
            <p class="question-explanation">${pq.instruction}</p>

            <div class="code-input-wrapper" style="margin-bottom: 10px;">
                <textarea id="practice-code-${pq.id}" class="code-textarea" style="min-height: 120px; border-radius: 8px;">${escapeHtml(pq.starterCode)}</textarea>
            </div>

            <div class="question-controls">
                <button class="btn btn-sm btn-primary" onclick="runPracticeCode(${pq.id})">▶️ Run Code</button>
                <button class="btn btn-sm btn-outline" onclick="togglePracticeSolution(${pq.id})">💡 Show Answer</button>
            </div>

            <div id="practice-output-${pq.id}" class="output-display-box" style="display: none; margin-top: 12px;"></div>

            <div id="practice-sol-${pq.id}" class="solution-collapse-box">
                <div style="font-weight: 700; margin-bottom: 6px; font-size: 13px; color: var(--accent-green);">Suggested Solution:</div>
                <pre class="code-display-body" style="background: var(--bg-code); padding: 12px; border-radius: 6px;">${escapeHtml(pq.solution)}</pre>
            </div>
        `;
        container.appendChild(card);
    });
}

function runPracticeCode(id) {
    const code = document.getElementById(`practice-code-${id}`).value;
    const outputBox = document.getElementById(`practice-output-${id}`);
    const res = executeJavaScriptCode(code);
    outputBox.style.display = "block";
    outputBox.textContent = res;
}

function togglePracticeSolution(id) {
    const solBox = document.getElementById(`practice-sol-${id}`);
    solBox.classList.toggle("open");
}

function togglePracticeComplete(id) {
    let completed = getCompletedPractice();
    if (completed.includes(id)) {
        completed = completed.filter(item => item !== id);
    } else {
        completed.push(id);
    }
    localStorage.setItem(STORAGE_KEYS.PRACTICE, JSON.stringify(completed));
    renderPracticeQuestions();
    updateAllProgress();
}

// ----------------------------------------------------------------------------
// 12. LOGICAL QUESTIONS & ANSWERS SECTION (10 NEW ES6+ QUESTIONS)
// ----------------------------------------------------------------------------
function renderLogicalQuestions() {
    const container = document.getElementById("logical-questions-container");
    const completed = getCompletedLogical();
    container.innerHTML = "";

    LOGICAL_QUESTIONS.forEach(lq => {
        const isDone = completed.includes(lq.id);
        const card = document.createElement("div");
        card.className = `question-card ${isDone ? 'completed' : ''}`;
        card.id = `logical-card-${lq.id}`;

        card.innerHTML = `
            <!-- Header: Question X and Subtitle -->
            <div class="question-card-header">
                <div>
                    <span class="logical-q-badge">${lq.questionNumber}</span>
                    <h3 class="question-title" style="margin-top: 4px;">${lq.subtitle}</h3>
                </div>
                <button class="btn btn-sm ${isDone ? 'btn-success' : 'btn-outline'}" onclick="toggleLogicalComplete(${lq.id})">
                    ${isDone ? '✓ Solved' : 'Mark Solved'}
                </button>
            </div>

            <!-- Question Block -->
            <div class="lesson-block" style="margin-bottom: 14px;">
                <div class="lesson-heading">❓ Question</div>
                <p class="lesson-text" style="white-space: pre-wrap;">${escapeHtml(lq.question)}</p>
            </div>

            <!-- Action Controls -->
            <div class="question-controls" style="margin-bottom: 12px;">
                <button class="btn btn-sm btn-outline" id="btn-toggle-sol-${lq.id}" onclick="toggleLogicalSolution(${lq.id})">
                    👁️ Show Answer
                </button>
                <button class="btn btn-sm btn-primary" onclick="tryLogicalInSandbox(${lq.id})">
                    💻 Try Yourself
                </button>
            </div>

            <!-- Answer Section (Collapsible) -->
            <div id="logical-sol-${lq.id}" class="solution-collapse-box">
                <!-- Answer Summary -->
                <div class="lesson-block">
                    <div class="lesson-heading" style="color: var(--accent-green);">📝 Answer</div>
                    <p class="lesson-text">${escapeHtml(lq.answerText)}</p>
                </div>

                <!-- Code Block -->
                <div class="lesson-block">
                    <div class="lesson-heading">💻 Code</div>
                    <div class="code-display-box" style="margin-top: 4px;">
                        <pre class="code-display-body" style="background: var(--bg-code); padding: 14px; border-radius: 6px;">${escapeHtml(lq.code)}</pre>
                    </div>
                </div>

                <!-- Output Block -->
                <div class="lesson-block">
                    <div class="lesson-heading" style="color: var(--accent-blue);">🎯 Output</div>
                    <div class="output-display-box" style="margin-top: 4px;">${escapeHtml(lq.output)}</div>
                </div>

                <!-- Explanation Block -->
                <div class="lesson-block" style="margin-bottom: 0;">
                    <div class="lesson-heading" style="color: var(--accent-purple);">💡 Explanation</div>
                    <p class="lesson-text" style="white-space: pre-wrap;">${escapeHtml(lq.explanation)}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleLogicalSolution(id) {
    const box = document.getElementById(`logical-sol-${id}`);
    const btn = document.getElementById(`btn-toggle-sol-${id}`);
    box.classList.toggle("open");
    if (box.classList.contains("open")) {
        btn.textContent = "🙈 Hide Answer";
    } else {
        btn.textContent = "👁️ Show Answer";
    }
}

function tryLogicalInSandbox(id) {
    const q = LOGICAL_QUESTIONS.find(item => item.id === id);
    if (q) {
        document.getElementById("sandbox-code-input").value = q.code;
        navigateTo("sandbox");
        runSandboxCode();
    }
}

function toggleLogicalComplete(id) {
    let completed = getCompletedLogical();
    if (completed.includes(id)) {
        completed = completed.filter(item => item !== id);
    } else {
        completed.push(id);
    }
    localStorage.setItem(STORAGE_KEYS.LOGICAL, JSON.stringify(completed));
    renderLogicalQuestions();
    updateAllProgress();
}

// ----------------------------------------------------------------------------
// 13. BASIC JAVASCRIPT TEST (15 QUESTIONS)
// ----------------------------------------------------------------------------
function renderTestQuestions() {
    const container = document.getElementById("test-questions-list");
    container.innerHTML = "";

    TEST_QUESTIONS.forEach((tq, idx) => {
        const item = document.createElement("div");
        item.className = "test-item-card";
        item.innerHTML = `
            <div class="test-q-number">Question ${idx + 1} of 15 • Topic: ${tq.topic}</div>
            <div class="test-q-title">${tq.question}</div>
            <div class="test-options">
                ${tq.options.map((opt, optIdx) => `
                    <label class="test-option-label" id="label-q-${tq.id}-opt-${optIdx}">
                        <input type="radio" name="q_${tq.id}" value="${optIdx}" required>
                        <span>${escapeHtml(opt)}</span>
                    </label>
                `).join("")}
            </div>
        `;
        container.appendChild(item);
    });
}

function submitQuiz(e) {
    e.preventDefault();
    let score = 0;
    const total = TEST_QUESTIONS.length;
    const breakdownContainer = document.getElementById("result-details-breakdown");
    breakdownContainer.innerHTML = "";

    TEST_QUESTIONS.forEach(tq => {
        const selected = document.querySelector(`input[name="q_${tq.id}"]:checked`);
        const userChoice = selected ? parseInt(selected.value, 10) : -1;
        const isCorrect = userChoice === tq.correctIndex;

        if (isCorrect) score++;

        const detailDiv = document.createElement("div");
        detailDiv.className = `result-detail-item ${isCorrect ? 'correct' : 'wrong'}`;
        detailDiv.innerHTML = `
            <strong>Q${tq.id}: ${tq.question}</strong><br>
            <span>Your Answer: ${userChoice !== -1 ? escapeHtml(tq.options[userChoice]) : "Not answered"} ${isCorrect ? '✅' : '❌'}</span><br>
            ${!isCorrect ? `<span style="color: var(--accent-green);">Correct Answer: ${escapeHtml(tq.options[tq.correctIndex])}</span><br>` : ''}
            <small style="color: var(--text-muted);">Explanation: ${tq.explanation}</small>
        `;
        breakdownContainer.appendChild(detailDiv);
    });

    const percentage = Math.round((score / total) * 100);
    let rating = "Keep Practicing!";
    let icon = "💪";

    if (percentage >= 80) {
        rating = "Excellent!";
        icon = "🏆";
    } else if (percentage >= 50) {
        rating = "Good Job!";
        icon = "👍";
    }

    document.getElementById("result-icon").textContent = icon;
    document.getElementById("result-score-text").textContent = `${score} / ${total}`;
    document.getElementById("result-percentage-text").textContent = `${percentage}%`;
    document.getElementById("result-rating-text").textContent = rating;

    const saved = getSavedTestScore();
    if (!saved || score > saved.score) {
        localStorage.setItem(STORAGE_KEYS.TEST_SCORE, JSON.stringify({ score, total, percentage, date: new Date().toLocaleDateString() }));
    }

    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("test-result-card").style.display = "block";
    updateAllProgress();
    window.scrollTo({ top: document.getElementById("test-result-card").offsetTop - 80, behavior: "smooth" });
}

function retakeTest() {
    document.getElementById("quiz-form").reset();
    document.getElementById("quiz-form").style.display = "block";
    document.getElementById("test-result-card").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetTest() {
    if (confirm("Reset current test selections?")) {
        retakeTest();
    }
}

// ----------------------------------------------------------------------------
// 14. PROGRESS DASHBOARD & ACHIEVEMENTS
// ----------------------------------------------------------------------------
function updateAllProgress() {
    const completedLessons = getCompletedLessons();
    const completedPractice = getCompletedPractice();
    const completedLogical = getCompletedLogical();
    const savedTest = getSavedTestScore();

    // Lessons progress
    const lessonsPct = Math.round((completedLessons.length / LESSONS_DATA.length) * 100);
    document.getElementById("prog-lessons-count").textContent = completedLessons.length;
    document.getElementById("prog-lessons-percent").textContent = lessonsPct + "%";
    document.getElementById("prog-lessons-bar").style.width = lessonsPct + "%";
    document.getElementById("sidebar-lessons-badge").textContent = `${completedLessons.length}/${LESSONS_DATA.length}`;
    document.getElementById("lesson-progress-count").textContent = `${completedLessons.length} / ${LESSONS_DATA.length} Completed`;

    // Practice progress
    const practicePct = Math.round((completedPractice.length / PRACTICE_QUESTIONS.length) * 100);
    document.getElementById("prog-practice-count").textContent = completedPractice.length;
    document.getElementById("prog-practice-percent").textContent = practicePct + "%";
    document.getElementById("prog-practice-bar").style.width = practicePct + "%";
    document.getElementById("sidebar-practice-badge").textContent = `${completedPractice.length}/${PRACTICE_QUESTIONS.length}`;
    document.getElementById("practice-progress-count").textContent = `${completedPractice.length} / ${PRACTICE_QUESTIONS.length} Solved`;

    // Logical progress
    const logicalPct = Math.round((completedLogical.length / LOGICAL_QUESTIONS.length) * 100);
    document.getElementById("prog-logical-count").textContent = completedLogical.length;
    document.getElementById("prog-logical-percent").textContent = logicalPct + "%";
    document.getElementById("prog-logical-bar").style.width = logicalPct + "%";
    document.getElementById("sidebar-logical-badge").textContent = `${completedLogical.length}/${LOGICAL_QUESTIONS.length}`;
    document.getElementById("logical-progress-count").textContent = `${completedLogical.length} / ${LOGICAL_QUESTIONS.length} Solved`;

    // Test score
    if (savedTest) {
        document.getElementById("prog-test-score").textContent = `${savedTest.score} / ${savedTest.total}`;
        document.getElementById("prog-test-percent").textContent = savedTest.percentage + "%";
        document.getElementById("prog-test-bar").style.width = savedTest.percentage + "%";
    } else {
        document.getElementById("prog-test-score").textContent = "Not taken yet";
        document.getElementById("prog-test-percent").textContent = "0%";
        document.getElementById("prog-test-bar").style.width = "0%";
    }

    // Overall Progress in Navbar
    const overallPct = Math.round((lessonsPct * 0.4) + (practicePct * 0.3) + (logicalPct * 0.2) + ((savedTest ? savedTest.percentage : 0) * 0.1));
    document.getElementById("nav-overall-percent").textContent = overallPct + "%";
    document.getElementById("nav-progress-bar-fill").style.width = overallPct + "%";

    renderBadges(completedLessons.length, completedPractice.length, completedLogical.length, savedTest);
}

function renderBadges(lessonCount, practiceCount, logicalCount, testResult) {
    const badgesContainer = document.getElementById("achievements-badges-container");
    const badges = [
        { name: "First Step", desc: "Complete 1 lesson", emoji: "🌱", unlocked: lessonCount >= 1 },
        { name: "Curious Learner", desc: "Complete 5 lessons", emoji: "📖", unlocked: lessonCount >= 5 },
        { name: "JS Scholar", desc: "Complete all 18 lessons", emoji: "🎓", unlocked: lessonCount >= 18 },
        { name: "Code Tinkerer", desc: "Solve 3 practice questions", emoji: "💻", unlocked: practiceCount >= 3 },
        { name: "Practice Pro", desc: "Solve all 10 practice questions", emoji: "⚡", unlocked: practiceCount >= 10 },
        { name: "Logic Master", desc: "Solve all 10 logical questions", emoji: "🧠", unlocked: logicalCount >= 10 },
        { name: "Quiz Master", desc: "Score 80%+ in the JS Test", emoji: "🏆", unlocked: testResult && testResult.percentage >= 80 }
    ];

    badgesContainer.innerHTML = badges.map(b => `
        <div class="badge-item ${b.unlocked ? 'unlocked' : ''}">
            <div class="badge-emoji">${b.emoji}</div>
            <div>
                <div class="badge-name">${b.name}</div>
                <div class="badge-desc">${b.desc}</div>
            </div>
        </div>
    `).join("");
}

function resetAllPlatformProgress() {
    if (confirm("Are you sure you want to reset all your learning progress? This cannot be undone.")) {
        localStorage.removeItem(STORAGE_KEYS.LESSONS);
        localStorage.removeItem(STORAGE_KEYS.PRACTICE);
        localStorage.removeItem(STORAGE_KEYS.LOGICAL);
        localStorage.removeItem(STORAGE_KEYS.TEST_SCORE);
        updateAllProgress();
        renderLessonButtons();
        renderActiveLesson(0);
        renderPracticeQuestions();
        renderLogicalQuestions();
        alert("Progress has been reset successfully.");
    }
}

// ----------------------------------------------------------------------------
// 15. LIVE SEARCH ENGINE
// ----------------------------------------------------------------------------
function setupSearch() {
    const searchInput = document.getElementById("global-search-input");
    const dropdown = document.getElementById("search-results-dropdown");
    const clearBtn = document.getElementById("search-clear-btn");

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length === 0) {
            dropdown.style.display = "none";
            clearBtn.style.display = "none";
            return;
        }

        clearBtn.style.display = "block";
        const results = [];

        // Search Lessons
        LESSONS_DATA.forEach((l, idx) => {
            if (l.title.toLowerCase().includes(query) || l.meaning.toLowerCase().includes(query)) {
                results.push({
                    type: "Lesson",
                    title: `${idx + 1}. ${l.title}`,
                    desc: l.meaning,
                    action: () => {
                        navigateTo("lessons");
                        renderActiveLesson(idx);
                    }
                });
            }
        });

        // Search Practice Questions
        PRACTICE_QUESTIONS.forEach(pq => {
            if (pq.title.toLowerCase().includes(query) || pq.instruction.toLowerCase().includes(query)) {
                results.push({
                    type: "Practice Question",
                    title: pq.title,
                    desc: pq.instruction,
                    action: () => {
                        navigateTo("practice");
                        const elem = document.getElementById(`practice-card-${pq.id}`);
                        if (elem) elem.scrollIntoView({ behavior: "smooth" });
                    }
                });
            }
        });

        // Search Logical Questions
        LOGICAL_QUESTIONS.forEach(lq => {
            if (lq.subtitle.toLowerCase().includes(query) || lq.question.toLowerCase().includes(query) || lq.explanation.toLowerCase().includes(query)) {
                results.push({
                    type: "Logical Question",
                    title: `${lq.questionNumber}: ${lq.subtitle}`,
                    desc: lq.question,
                    action: () => {
                        navigateTo("logical");
                        const elem = document.getElementById(`logical-card-${lq.id}`);
                        if (elem) elem.scrollIntoView({ behavior: "smooth" });
                    }
                });
            }
        });

        if (results.length === 0) {
            dropdown.innerHTML = `<div style="padding: 16px; font-size: 13px; color: var(--text-muted); text-align: center;">No matching lessons or questions found for "${escapeHtml(query)}"</div>`;
        } else {
            dropdown.innerHTML = results.map((r, index) => `
                <div class="search-result-item" data-search-idx="${index}">
                    <span class="search-result-type">${r.type}</span>
                    <span class="search-result-title">${escapeHtml(r.title)}</span>
                    <span class="search-result-desc">${escapeHtml(r.desc.substring(0, 75))}...</span>
                </div>
            `).join("");

            dropdown.querySelectorAll(".search-result-item").forEach((item, index) => {
                item.onclick = () => {
                    results[index].action();
                    dropdown.style.display = "none";
                    searchInput.value = "";
                    clearBtn.style.display = "none";
                };
            });
        }
        dropdown.style.display = "block";
    });

    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        dropdown.style.display = "none";
        clearBtn.style.display = "none";
        searchInput.focus();
    });

    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });
}

// ----------------------------------------------------------------------------
// 16. UTILITY HELPERS
// ----------------------------------------------------------------------------
function escapeHtml(string) {
    if (!string) return "";
    return String(string)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function loadDailyTip() {
    const tips = [
        "Use console.log() often when you want to see what is happening inside your code.",
        "Always use 'const' by default, and only switch to 'let' when you know the value will change.",
        "Remember that JavaScript array indexes start from 0, not 1!",
        "Backticks (``) let you insert variables into text easily with ${variableName}.",
        "Breaking complex problems into smaller simple steps makes coding easy."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    const tipEl = document.getElementById("daily-tip");
    if (tipEl) tipEl.textContent = randomTip;
}