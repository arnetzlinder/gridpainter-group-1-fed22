import { renderHome } from "./home.js";
import { renderRegister } from "./register.js";
import { renderGameboard } from "./gameboard.js";
import { renderHeader } from "./header.js";
import { renderColors } from "./pickcolor.js";
import { renderBigLogo } from "./renderLogo.js";

const loginCont = document.getElementById("login-container");
const mainContainer = document.getElementById("main-container");

export function renderLogin() {
  let loginWrapper = document.createElement("div");
  loginWrapper.id = "login-wrapper";

  let logoWrapper = document.createElement("div");
  logoWrapper.id = "logo-wrapper";

  loginWrapper.append(logoWrapper);

  let loginLogoImg = document.createElement("img");
  loginLogoImg.src = "images/paint-logov2.png";
  loginLogoImg.alt = "Grid Painters Logo";
  loginLogoImg.classList.add("logo-image-small");

  logoWrapper.append(loginLogoImg);

  let loginLogoTextWrapper = document.createElement("div");
  loginLogoTextWrapper.id = "login-logo-text-wrapper";

  logoWrapper.append(loginLogoTextWrapper);

  let loginLogoTextOne = document.createElement("p");
  loginLogoTextOne.id = "login-logo-text-one";
  loginLogoTextOne.classList.add("login-logo-text-one");
  loginLogoTextOne.innerHTML = "Grid";

  loginLogoTextWrapper.append(loginLogoTextOne);

  let loginLogoTextTwo = document.createElement("p");
  loginLogoTextTwo.id = "login-logo-text-two";
  loginLogoTextTwo.classList.add("login-logo-text-two");
  loginLogoTextTwo.innerHTML = "Painters";

  loginLogoTextWrapper.append(loginLogoTextTwo);

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

        mainContainer.style.display = "block";

        renderBigLogo();
        renderHeader();
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
  loginWrapper.append(loginForm);
  loginForm.append(usernameLabel);
  loginForm.append(usernameInput);
  loginForm.append(passwordLabel);
  loginForm.append(passwordInput);
  loginForm.append(loginButton);
  loginForm.append(registerButton);
}
