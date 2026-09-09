

const add = document.getElementById("add");
add.addEventListener("click", () => {

    const UserName = document.getElementById("UserName").value;
    const UserAge = document.getElementById("UserAge").value;
    const result = document.getElementById("result")

    const ShowData = Number(UserName) + Number(UserAge);
    result.textContent = ShowData;
})


const sub = document.getElementById("sub");
sub.addEventListener("click", () => {

    const UserName = document.getElementById("UserName").value;
    const UserAge = document.getElementById("UserAge").value;
    const result = document.getElementById("result")

    const ShowData = Number(UserName) - Number(UserAge);
    result.textContent = ShowData;
})


const mul = document.getElementById("mul");
mul.addEventListener("click", () => {

    const UserName = document.getElementById("UserName").value;
    const UserAge = document.getElementById("UserAge").value;
    const result = document.getElementById("result")

    const ShowData = Number(UserName) * Number(UserAge);
    result.textContent = ShowData;
})



const div = document.getElementById("div");
div .addEventListener("click", () => {

    const UserName = document.getElementById("UserName").value;
    const UserAge = document.getElementById("UserAge").value;
    const result = document.getElementById("result")

    const ShowData = Number(UserName) / Number(UserAge);
    result.textContent = ShowData;
})


