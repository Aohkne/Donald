// setup for Login Form
function showLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-error").textContent = "";
  document.getElementById("login-success").textContent = "";
}
// setup for Register Form
function showRegisterForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("register-error").textContent = "";
}
// Process the login form then turn to the index.html when user entered correctly
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const errorMessage = document.getElementById("login-error");
  const successMessage = document.getElementById("login-success");

  if (email === "" || password === "") {
    errorMessage.textContent = "Vui lòng nhập đầy đủ thông tin!";
    successMessage.textContent = "";
  } else {
    errorMessage.textContent = "";
    successMessage.textContent = "Đăng Nhập thành công!";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }
}
// Process the register form then turn to the index.html when user entered correctly
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("register-error");
  const successMessage = document.getElementById("register-success");

  if (email === "" || password === "" || confirmPassword === "") {
    errorMessage.textContent = "Vui lòng nhập đầy đủ thông tin!";
  } else if (password !== confirmPassword) {
    errorMessage.textContent = "Mật khẩu xác nhận không khớp!";
  } else {
    errorMessage.textContent = "";
    successMessage.textContent = "Đăng Ký thành công!";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }
}
// Comming soon =))))
function registerWithGoogle() {}

// Comming soon =))))
function registerWithPhone() {}
