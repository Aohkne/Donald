function showLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-error").textContent = "";
  document.getElementById("login-success").textContent = "";
}

function showRegisterForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("register-error").textContent = "";
}

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
  }
}

function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("register-error");

  if (email === "" || password === "" || confirmPassword === "") {
    errorMessage.textContent = "Vui lòng nhập đầy đủ thông tin!";
  } else if (password !== confirmPassword) {
    errorMessage.textContent = "Mật khẩu xác nhận không khớp!";
  } else {
    errorMessage.textContent = "";
    alert("Đăng Ký thành công!");
  }
}

function registerWithGoogle() {
  alert("Chức năng Đăng Ký bằng Google chưa được hỗ trợ.");
}

function registerWithPhone() {
  alert("Chức năng Đăng Ký bằng Số Điện Thoại chưa được hỗ trợ.");
}
