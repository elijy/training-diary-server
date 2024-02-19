const express = require("express");
const crypto = require("crypto");

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
  res.send(WORKOUTS);
});

router.post("/workouts", async (req, res) => {
  const { date } = req.body;
  const id = crypto.randomBytes(2).toString("hex");
  const newWorkout = { id, date };
  WORKOUTS.push(newWorkout);
  res.send(newWorkout);
});

module.exports = router;
