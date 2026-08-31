// Rest

let rest=(...values) => {
    console.log(values);
}

rest(10, 20, 30);

//  Spread
const numbers1 = [10, 20, 30];
const numbers2 = [40, 50, 60];

console.log(...numbers1, ...numbers2);