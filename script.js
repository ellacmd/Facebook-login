const loginButton = document.getElementById("btn");
loginButton.addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();
  const valEmail = ValidateEmail();
  const valPass = validatePassword();

  // redirect to welcome page
  if(valEmail && valPass) {
    window.location.href = "welcome.html";
  }
}

function ValidateEmail() {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var mail = document.getElementById("email").value;
  var errorMessage = document.getElementById("invalid-email");
  if (!mail.match(validRegex)) {
    errorMessage.innerHTML =
      "The email address or phone number that you've entered doesn't match any account.<strong> <a class= 'error-link'>Sign up for an account.</a></strong>";
    document.getElementById("email").classList.add("error-border");
    return false;
  } else {
    errorMessage.innerHTML = "";
    document.getElementById("email").classList.remove("error-border");
    return true;
  }
}

function validatePassword() {
  var pw = document.getElementById("pswd").value;
  var invalidPassword = document.getElementById("invalid-password");

  /*
  // password is empty
  if (pw === "") {
    invalidPassword.innerHTML =
      "The password that you've entered is incorrect.<strong><a class ='error-link'>Forgotten password?</a></strong> ";
    document.getElementById("pswd").classList.add("error-border");
    return false;
  }

  // password equal to password
  if(pw == 'password') {
    invalidPassword.innerHTML = "";
    document.getElementById("pswd").classList.remove("error-border");
    return true;
  }else {

    // password not equal to password
    invalidPassword.innerHTML =
      "The password that you've entered is incorrect.<strong><a class ='error-link'>Forgotten password?</a></strong> ";
    document.getElementById("pswd").classList.add("error-border");
    return false;
  }
  */

  switch (true) {
    case pw === "":
      invalidPassword.innerHTML = "Please enter a password"
      document.getElementById("pswd").classList.add("error-border");
      return false;
      break;
  
      case pw !== "password":
        invalidPassword.innerHTML =
        "The password that you've entered is incorrect.<strong><a class ='error-link'>Forgotten password?</a></strong> ";
      document.getElementById("pswd").classList.add("error-border");
      return false;
      break;
  
      case pw == "password":
        invalidPassword.innerHTML = "";
      document.getElementById("pswd").classList.remove("error-border");
      return true;
      break;
  
    default:
      break;
  }

}


