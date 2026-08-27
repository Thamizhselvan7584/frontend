// GLOBAL SCOPE

var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);


// FUNCTION SCOPE

function testFunction() {

    var functionVar = "I am function var";
    let functionLet = "I am function let";
    const functionConst = "I am function const";

    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
}

testFunction();


// BLOCK SCOPE

if (true) {

    var blockVar = "I am var";  // var is not a Block scope
    let blockLet = "I am let";
    const blockConst = "I am const";

    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}


// var can be accessed outside the block
console.log(blockVar);

// let and const cannot be accessed outside the block
// console.log(blockLet);
// console.log(blockConst);