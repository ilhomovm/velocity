// ==============================
// REGISTER
// ==============================

const registerForm = document.querySelector(".form-box.register form");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = registerForm.querySelector("input[type='text']").value.trim();
        const email = registerForm.querySelector("input[type='email']").value.trim();
        const password = registerForm.querySelector("input[type='password']").value;

        if (!username || !email || !password) {
            alert("Please fill all fields.");
            return;
        }

        const user = {
            username,
            email,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration successful!");

        document.querySelector(".container").classList.remove("active");

        registerForm.reset();

    });

}


// ==============================
// LOGIN
// ==============================

const loginForm = document.querySelector(".form-box.login form");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = loginForm.querySelector("input[type='text']").value.trim();
        const password = loginForm.querySelector("input[type='password']").value;

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {

            alert("No registered user found.");
            return;

        }

        if (
            username === savedUser.username &&
            password === savedUser.password
        ) {

            sessionStorage.setItem("loggedIn", "true");

            window.location.href = "index.html";

        } else {

            alert("Username or Password is incorrect.");

        }

    });

}