/* 1.// Callback function
const greet = (name, callback) => {
    console.log("Hello " + name);
    callback();
};

// Arrow function as callback
greet("Akash", () => {
    console.log("Welcome to JavaScript");
});


2.const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Promise Successful");
    } else {
        reject("Promise Failed");
    }

});

console.log(myPromise);

3.const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data received successfully");
    } else {
        reject("Something went wrong");
    }

});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise completed");
    });

4.const myPromise = new Promise((resolve, reject) => {

    resolve("Data received");

});

const getData = async () => {

    let result = await myPromise;

    console.log(result);

};

getData();

5.fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }); */