import { renderPictures } from "./pictures.js";

const mainContainer = document.getElementById("main");

export function renderPreviousGames() {
  let pictureContainer = document.createElement("div");
  pictureContainer.id = "picture-container";

  mainContainer.append(pictureContainer);

  renderPictures();

  let backButton = document.createElement("button");
  backButton.id = "back-button";
  backButton.classList.add("return-button");
  backButton.innerHTML = "Return";

  backButton.addEventListener("click", function () {
    location.reload();
  });

  mainContainer.append(backButton);
}
