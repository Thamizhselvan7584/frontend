// 1. var

console.log(a); // undefined

var a = 10;

console.log(a);


// 2. let

// console.log(b); // ReferenceError: Cannot access 'b' before initialization

let b = 20;

console.log(b); 


// 3. const

// console.log(c); // ReferenceError: Cannot access 'c' before initialization

const c = 30;

console.log(c); 


// 4. Function Declaration

hello(); // Works!

function hello() {
    console.log("JavaScript");
}


//  Arrow function

// name();  ReferenceError: Cannot access 'name' before initialization

let name=()=>{
    console.log("a");
    
}
// Anonymous function and Arrow function is not work !