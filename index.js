const express = require("express");
const bodyParser = require("body-parser");
const workoutRouter = require("./routes/workouts");
const exercisesRouter = require("./routes/exercises");
const setsRouter = require("./routes/sets");

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(workoutRouter);
app.use(exercisesRouter);
app.use(setsRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
