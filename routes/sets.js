import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/sets", async (req, res) => {
  const { exerciseId } = req.query;
  const { data } = await axios.get(
    `http://localhost:3001/sets?exerciseId=${exerciseId}`
  );
  res.send(data);
});

router.post("/sets", async (req, res) => {
  const { exerciseId, weight, reps } = req.body;
  const { data } = await axios.post("http://localhost:3001/sets", {
    exerciseId,
    weight,
    reps,
  });
  res.send(data);
});

router.delete("/sets/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.delete(`http://localhost:3001/sets/${id}`);
  res.send(data);
});

export default router;
