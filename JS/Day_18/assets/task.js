function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";
}

function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {

        if (email === storedUser.email &&
            password === storedUser.password) {

            alert("Login Successful!");

            localStorage.setItem("loggedIn", "true");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password");

        }

    } else {

        alert("Please Register First");

    }
}

function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {

        if (email === storedUser.email &&
            password === storedUser.password) {

            alert("Login Successful!");

            localStorage.setItem("loggedIn", "true");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password");

        }

    } else {

        alert("Please Register First");

    }
}