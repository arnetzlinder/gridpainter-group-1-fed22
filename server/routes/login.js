const express = require("express");
const router = express.Router();
const connection = require("../conn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", async function (req, res) {
  try {
    let { userName, userPassword } = req.body;

    const sql = "SELECT * FROM users WHERE userName = ?";
    const values = [userName];
    connection.query(sql, values, async (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Server error");
      } else if (results.length === 0) {
        res.status(401).send("Invalid username or password");
      } else {
        const user = results[0];

        const isPasswordMatch = await bcrypt.compare(
          userPassword,
          user.userPassword
        );

        if (!isPasswordMatch) {
          res.status(401).send("Invalid username or password");
        } else {
          const token = jwt.sign(
            { user_id: user.user_id },
            process.env.JWT_SECRET,
            console.log(process.env.JWT_SECRET)
          );
          res.status(200).send({ token });
        }
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
