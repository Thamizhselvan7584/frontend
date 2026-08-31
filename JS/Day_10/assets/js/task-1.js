console.log("===== SCOPE =====");

// var - function scope
if (true) {
    var a = 10;
}

console.log("var:", a);


// let - block scope
if (true) {
    let b = 20;
    console.log("let inside block:", b);
}

// console.log(b); // ReferenceError


// const - block scope
if (true) {
    const c = 30;
    console.log("const inside block:", c);
}

// console.log(c); // ReferenceError



console.log("\n===== REDECLARATION =====");

// var allows redeclaration
var x = 10;
var x = 20;

console.log("var redeclaration:", x);


// let does not allow redeclaration
let y = 10;
// let y = 20; // SyntaxError


// const does not allow redeclaration
const z = 10;
// const z = 20; // SyntaxError



console.log("\n===== REASSIGNMENT =====");

// var reassignment
var p = 10;
p = 20;

console.log("var reassignment:", p);


// let reassignment
let q = 10;
q = 20;

console.log("let reassignment:", q);


// const reassignment
const r = 10;
 // r = 20; // TypeError: Assignment to constant variable.

console.log("const:", r);



console.log("\n===== HOISTING =====");

// var is hoisted
console.log("var hoisting:", m);

var m = 100;


// let and const are hoisted but in TDZ

// console.log(n); // ReferenceError
let n = 200;

// console.log(o); // ReferenceError
const o = 300;