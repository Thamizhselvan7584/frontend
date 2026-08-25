// Task 1    Array Access

let fruit = ["apple", "Mango", "Orange", "Banana"]

for (let a = 0; a < fruit.length; a++) {
    console.log(fruit[a]);

}

// Task  2   Object Access

let obj = {
    name: "Ravi",
    age: 22,
    mark: 85
}

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["mark"]);


// Task  3  Array of Objects

let students = [
    {
        name: "Ravi",
        age: 22,
        mark: 85
    },
    {
        name: "Kumar",
        age: 23,
        mark: 90
    },
    {
        name: "Priya",
        age: 21,
        mark: 95
    }
];

for (let a = 0; a < students.length; a++) {
    console.log(students[a].name);

}

// Task 4  . Find a Student

let target = "Priya";

for (let a = 0; a < students.length; a++) {
    if (students[a].name === target) {
        console.log("Find a Student:",students[a]);
        break;
    }
}


// Task 5  Salary Filter

let employee = [
    {
        name: "Ravi",
        age: 22,
         salary:50000
    },
    {
        name: "Kumar",
        age: 23,
        salary:10000
    },
    {
        name: "Priya",
        age: 21,
        salary:45000
    }
]

for(let a=0;a<employee.length;a++){
    if(employee[a].salary<=45000){
    
        console.log( "Salary Filter:",employee[a]);
        
    }  
}