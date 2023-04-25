const headerContainer = document.getElementById("header");

export function renderBigLogo() {
  const headerContainer = document.getElementById("header");

  let logoContainer = document.createElement("div");
  logoContainer.id = "logo-container";
  logoContainer.classList.add("logo-container");

  headerContainer.append(logoContainer);

  let logoImg = document.createElement("div");
  logoImg.id = "logo-img";
  logoImg.classList.add("logo-img");

  logoContainer.append(logoImg);

  let image = document.createElement("img");
  image.src = "images/paint-logov2.png";
  image.alt = "Grid Painters Logo";
  image.classList.add("logo-image-big");

  logoImg.append(image);

  let logoTextOne = document.createElement("div");
  logoTextOne.id = "logo-text-one";
  logoTextOne.classList.add("logo-text-one");

  let logoTextOneContent = document.createElement("p");
  logoTextOneContent.id = "logo-text-one-content";
  logoTextOneContent.classList.add("logo-text-one-content");
  logoTextOneContent.innerHTML = "Grid";

  logoContainer.append(logoTextOne);
  logoTextOne.append(logoTextOneContent);

  let logoTextTwo = document.createElement("div");
  logoTextTwo.id = "logo-text-two";
  logoTextTwo.classList.add("logo-text-two");

  let logoTextTwoContent = document.createElement("p");
  logoTextTwoContent.id = "logo-text-two-content";
  logoTextTwoContent.classList.add("logo-text-two-content");
  logoTextTwoContent.innerHTML = "Painters";

  logoContainer.append(logoTextTwo);
  logoTextTwo.append(logoTextTwoContent);
}
