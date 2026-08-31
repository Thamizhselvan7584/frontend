const numbers5 = [10, 25, 30, 45, 50, 65];


// 1. Find numbers greater than 30

for (let i = 0; i < numbers5.length; i++) {

    if (numbers5[i] > 30) {
        console.log(numbers5[i]);
    }

}



// 2. Find the first number greater than 40

console.log("Numbers greater than 30:");

for (let i = 0; i < numbers5.length; i++) {

    if (numbers5[i] > 40) {
        console.log("First number greater than 40:", numbers5[i]);
        break;
    }

}


// 4. Create a new array containing doubled values

let doubled = [];

for (let i = 0; i < numbers5.length; i++) {

    doubled.push(numbers5[i] * 2);

}

console.log("Doubled values:", doubled);