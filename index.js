const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const schema = require("./schema/schema");

const workoutRouter = require("./routes/workouts");
const exercisesRouter = require("./routes/exercises");
const setsRouter = require("./routes/sets");

const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());
app.use(workoutRouter);
app.use(exercisesRouter);
app.use(setsRouter);

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
