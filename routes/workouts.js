const express = require("express");
const crypto = require("crypto");
const axios = require("axios");

const router = express.Router();

const WORKOUTS = [
  {
    id: "40bf",
    date: "2024-02-04T19:51:04.463Z",
  },
  {
    id: "ab64",
    date: "2024-02-04T19:55:34.707Z",
  },
  {
    id: "38a3",
    date: "2024-02-08T00:13:03.931Z",
  },
];

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
  const index = WORKOUTS.findIndex((item) => item.id === id);
  const deletedWorkout = WORKOUTS.splice(index, 1);
  res.send(deletedWorkout[0]);
});

module.exports = router;
