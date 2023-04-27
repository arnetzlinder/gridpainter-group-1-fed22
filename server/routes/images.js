const express = require("express");
const router = express.Router();
const connection = require("../conn");

router.get("/random", (_, res) => {
  try {
    const sql = "SELECT * FROM `examplepicture` ORDER BY RAND() LIMIT 1";
    connection.query(sql, (error, results) => {
      if (error) {
        res.status(500).send("Server error");
      } else {
        res.send(results[0]);
      }
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
