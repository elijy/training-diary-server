const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/workouts", async (req, res) => {
  const { data } = await axios.get("http://localhost:3001/workouts");
  res.send(data);
});

router.post("/workouts", async (req, res) => {
  const { date } = req.body;
  const { data } = await axios.post("http://localhost:3001/workouts", {
    date,
  });
  res.send(data);
});

router.delete("/workouts/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.delete(`http://localhost:3001/workouts/${id}`);
  res.send(data);
});

module.exports = router;
