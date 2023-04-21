import { renderHome } from "./home.js";
import { renderRegister } from "./register.js";
import { renderGameboard } from "./gameboard.js";
import { renderHeader } from "./header.js";
import startGame from "./time.js";
import { renderColors } from "./pickcolor.js";

const loginCont = document.getElementById("login-container");

export function renderLogin() {
  console.log("yes");
  let loginWrapper = document.createElement("div");
  loginWrapper.id = "login-wrapper";

  let logo = document.createElement("h1");
  logo.id = "logo";
  logo.innerText = "Grid Painters";

  let loginForm = document.createElement("form");
  loginForm.id = "login-form";

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

  let loginButton = document.createElement("button");
  loginButton.id = "login-button";
  loginButton.type = "submit";
  loginButton.innerText = "Login";

  loginButton.addEventListener("click", async function (event) {
    event.preventDefault();

    try {
      const username = usernameInput.value;
      const password = passwordInput.value;

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: username, userPassword: password }),
      });

      if (response.status === 200) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        localStorage.setItem("userName", username);

        const requestHeaders = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        loginCont.innerHTML = "";
        renderHeader();
        renderGameboard();
        startGame();
        renderColors();
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
      alert(`Failed to log in: ${err.message}`);
    }
  });

  let registerButton = document.createElement("button");
  registerButton.id = "register-button";
  registerButton.innerText = "Register";

  registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    loginCont.innerHTML = "";

    renderRegister();
  });

  loginCont.append(loginWrapper);
  loginWrapper.append(logo);
  loginWrapper.append(loginForm);
  loginForm.append(usernameLabel);
  loginForm.append(usernameInput);
  loginForm.append(passwordLabel);
  loginForm.append(passwordInput);
  loginForm.append(loginButton);
  loginForm.append(registerButton);
}
