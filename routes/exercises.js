const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/exercises", async (req, res) => {
  const { data } = await axios.get("http://localhost:3001/exercises");
  res.send(data);
});

module.exports = router;
