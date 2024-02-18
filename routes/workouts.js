const express = require("express");

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

module.exports = router;
