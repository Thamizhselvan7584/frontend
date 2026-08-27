//  Task 1 — Function + Parameters

let sum = (a, b) => {
    return a + b;
}
console.log(sum(20, 30));

//  Task 2 — Function + for Loop

let evenNumber = (n) => {
    for (let a = 0; a < n; a++) {
        if (a % 2 == 0) {
            console.log("Even Number:", a);
        }

    }
}
evenNumber(10)

// Task 3 — Arrow Function

let factorial = (number) => {

    let fact = 1;
    for (let a = 1; a <= number; a++) {
        fact = fact * a
    }

return fact;
}

console.log(factorial(5));