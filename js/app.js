const container = document.querySelector(".container");

const registerBtn = document.querySelector(".register-link");
const loginBtn = document.querySelector(".login-link");

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    container.classList.add("active");
});

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    container.classList.remove("active");
});