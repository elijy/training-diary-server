const express = require("express");
const bodyParser = require("body-parser");
const workoutRouter = require("./routes/workouts");

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(workoutRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
