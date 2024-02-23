const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/exercises", async (req, res) => {
  const { data } = await axios.get("http://localhost:3001/exercises");
  res.send(data);
});

router.post("/exercises", async (req, res) => {
  const { name, workoutId } = req.body;
  const { data } = await axios.post("http://localhost:3001/exercises", {
    name,
    workoutId,
  });
  res.send(data);
});

router.put("/exercises/:id", async (req, res) => {
  const { id } = req.params;
  const { name, workoutId } = req.body;
  const { data } = await axios.put(`http://localhost:3001/exercises/${id}`, {
    name,
    workoutId,
  });
  res.send(data);
});

router.delete("/exercises/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.delete(`http://localhost:3001/exercises/${id}`);
  res.send(data);
});

module.exports = router;
