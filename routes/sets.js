const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/sets", async (req, res) => {
  const { exerciseId } = req.query;
  const { data } = await axios.get(
    `http://localhost:3001/sets?exerciseId=${exerciseId}`
  );
  res.send(data);
});

module.exports = router;
