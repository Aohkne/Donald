const signUpButton = document.getElementById("sign-up-btn");
const signInButton = document.getElementById("sign-in-btn");
const container = document.querySelector(".container");

signUpButton.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
