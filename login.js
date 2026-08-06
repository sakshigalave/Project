
// SHOW / HIDE PASSWORD


function togglePassword() {

    let password =
        document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


// LOGIN FUNCTION

function login() {

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value.trim();


    // Empty validation

    if (email === "") {

        alert("Please enter email");

        return;
    }


    if (password === "") {

        alert("Please enter password");

        return;
    }


    // Login credentials

    if (
        email === "sakshigalave918@gmail.com" &&
        password === "12345"
    ) {

        // Create login session

        localStorage.setItem(
            "loggedIn",
            "true"
        );


        alert("Login Successful ✅");


        // Go to Dashboard

        window.location.href = "index.html";


    } else {

        alert("Invalid Email or Password ❌");

    }

}