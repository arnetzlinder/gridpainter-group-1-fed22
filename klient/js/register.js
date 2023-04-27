import { renderLogin } from "./login.js";

const regContainer = document.getElementById("reg-container");

export function renderRegister() {
  let registerWrapper = document.createElement("div");
  registerWrapper.id = "register-wrapper";

  let registerText = document.createElement("h1");
  registerText.id = "register-text";
  registerText.innerText = "Register";

  let registerForm = document.createElement("form");
  registerForm.id = "register-form";

  let usernameLabel = document.createElement("label");
  usernameLabel.id = "username-label";
  usernameLabel.innerText = "Username";

  let usernameInput = document.createElement("input");
  usernameInput.id = "username-input";
  usernameInput.type = "text";

  let passwordLabel = document.createElement("label");
  passwordLabel.id = "password-label";
  passwordLabel.innerText = "Password";

  let passwordInput = document.createElement("input");
  passwordInput.id = "password-input";
  passwordInput.type = "password";

  let emailLabel = document.createElement("label");
  emailLabel.id = "email-label";
  emailLabel.innerText = "Email";

  let emailInput = document.createElement("input");
  emailInput.id = "email-input";
  emailInput.type = "email";

  let registerButton = document.createElement("button");
  registerButton.id = "register-page-button";
  registerButton.type = "submit";
  registerButton.innerText = "Create Account";

  registerButton.addEventListener("click", (e) => {
    e.preventDefault();

    let userData = {
      userName: usernameInput.value,
      userPassword: passwordInput.value,
      userEmail: emailInput.value,
    };

    fetch("http://gridpainters.com:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error registering user");
        }
        regContainer.innerHTML = "";
        renderRegComplete();
      })
      .catch((err) => {
        console.log(err);
        alert("Error registering user");
      });
  });

  regContainer.append(registerWrapper);
  registerWrapper.append(registerText);
  registerWrapper.append(registerForm);
  registerForm.append(usernameLabel);
  registerForm.append(usernameInput);
  registerForm.append(passwordLabel);
  registerForm.append(passwordInput);
  registerForm.append(emailLabel);
  registerForm.append(emailInput);
  registerForm.append(registerButton);
}

// Redirect when sucessfully registered

export function renderRegComplete() {
  let registerWrapper = document.createElement("div");
  registerWrapper.id = "register-wrapper";

  let registerCompleteMsg = document.createElement("h1");
  registerCompleteMsg.id = "register-complete-msg";
  registerCompleteMsg.innerHTML = "Registration Complete!";

  let redirectLogin = document.createElement("p");
  redirectLogin.id = "redirect-login";
  redirectLogin.innerHTML = "Click here to login";
  redirectLogin.addEventListener("click", (e) => {
    e.preventDefault();
    regContainer.innerHTML = "";
    renderLogin();
  });

  regContainer.append(registerWrapper);
  registerWrapper.append(registerCompleteMsg);
  registerWrapper.append(redirectLogin);
}
