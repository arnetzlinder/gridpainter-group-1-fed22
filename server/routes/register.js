const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const connection = require("../conn");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post(
  "/",
  [
    body("userName").notEmpty().withMessage("Username is required"),
    body("userPassword").notEmpty().withMessage("Password is required"),
    body("userEmail").isEmail().withMessage("Email is not valid"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const hashedPassword = await bcrypt.hash(
        req.body.userPassword,
        saltRounds
      );

      const { userName, userEmail } = req.body;
      const sql =
        "INSERT INTO users (userName, userPassword, userEmail) VALUES (?, ?, ?)";
      const values = [userName, hashedPassword, userEmail];
      connection.query(sql, values, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error registering new user");
        } else {
          console.log(result);
          res.status(200).send("User registered successfully");
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error registering new user");
    }
  }
);

module.exports = router;
