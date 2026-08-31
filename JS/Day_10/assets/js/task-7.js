const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);

});


// Using .then()

promise.then((result) => {
    console.log("Using then:", result);
});


// Using async/await

async function getData() {

    const result = await promise;

    console.log("Using async/await:", result);

}

getData();