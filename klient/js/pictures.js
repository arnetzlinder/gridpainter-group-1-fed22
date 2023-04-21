const mainContainer = document.getElementById("main");

export async function renderPictures() {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:3000/images", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 200) {
    let pictures = await response.json();

    let pictureContainer = document.getElementById("picture-container");
    if (!pictureContainer) {
      pictureContainer = document.createElement("div");
      pictureContainer.id = "picture-container";
      mainContainer.append(pictureContainer);
    } else {
      pictureContainer.innerHTML = "";
    }

    pictures.forEach((picture) => {
      let img = document.createElement("img");
      img.src = "data:image/png;base64," + picture.picture;
      img.alt = "Picture";
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };

      let pictureDiv = document.createElement("div");
      pictureDiv.appendChild(img);

      pictureContainer.append(pictureDiv);
    });
  } else {
    let error = await response.text();
    console.error(error);
  }
}

export function saveImage(dataURL) {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");

  const requestData = {
    user_id: user_id,
    picture: dataURL,
  };

  fetch("http://localhost:3000/images/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Image saved successfully.");
      } else {
        console.error("Image save failed.");
      }
    })
    .catch((error) => {
      console.error("Image save failed: ", error);
    });
}
