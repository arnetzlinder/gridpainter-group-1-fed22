import { renderPictures } from "./pictures.js";

const mainContainer = document.getElementById("main");

export function renderPreviousGames() {
  let pictureContainer = document.createElement("div");
  pictureContainer.id = "picture-container";

  mainContainer.append(pictureContainer);

  renderPictures();
}
