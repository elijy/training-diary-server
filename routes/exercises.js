import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/exercises", async (req, res) => {
  const { workoutId } = req.query;
  const { data } = await axios.get(
    `http://localhost:3001/exercises?workoutId=${workoutId}`
  );
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

export default router;
