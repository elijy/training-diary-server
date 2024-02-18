const express = require("express");
const workoutRouter = require("./routes/workouts");

const app = express();
const port = 3005;

app.use(workoutRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
