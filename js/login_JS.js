// login account

let loginForm = document.querySelector('.sign-in-form');
let login = document.querySelector('.btn-submit-login');

let username = document.querySelector('.userName-login').value;
let password = document.querySelector('.password-login').value;

login.addEventListener("click", () => {

    if (username == "admin" && password == "admin") {
        //khi nhập đúng chuyển trang
        loginForm.action = "./index.html";
    } else {

    }


});

export const user = username;
export const pass = password;



let sign_in_btn = document.querySelector("#sign-in-btn");
let sign_up_btn = document.querySelector("#sign-up-btn");
let container = document.querySelector(".container");

// chuyển qua lại login và register
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");

});





