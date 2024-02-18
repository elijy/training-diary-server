const express = require("express");

const router = express.Router();

router.get("/workouts", async (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
