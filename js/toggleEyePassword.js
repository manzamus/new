const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function () {
  if (password.type == "password") {
    password.type = "text";

    togglePassword.className = "fas fa-eye";
  } else {
    password.type = "password";
    togglePassword.className = "fas fa-eye-slash";
  }
});