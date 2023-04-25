const express = require("express");
const router = express.Router();
const connection = require("../conn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async function (req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const user_id = decodedToken.user_id;

  try {
    const sql = "SELECT * FROM gamepictures WHERE user_id = ?";
    const values = [user_id];
    connection.query(sql, values, async (error, results) => {
      if (error) {
        res.status(500).send("Server error");
      } else {
        const pictures = results.map((result) => {
          return {
            picture_id: result.picture_id,
            picture: result.picture.toString("base64"),
          };
        });

        res.status(200).send(pictures);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/save", async function (req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const user_id = decodedToken.user_id;

  try {
    const picture = req.body.picture;
    const pictureBuffer = Buffer.from(
      picture.replace(/^data:image\/(png|gif|jpeg);base64,/, ""),
      "base64"
    );

    const sql = "INSERT INTO gamepictures (user_id, picture) VALUES (?, ?)";
    const values = [user_id, pictureBuffer];
    connection.query(sql, values, (error, results) => {
      if (error) {
        res.status(500).send("Server error");
      } else {
        res.status(200).send("Image saved successfully.");
      }
    });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
