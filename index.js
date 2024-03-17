import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlHTTP as expressGraphQL } from "express-graphql";
import { client } from "./db/index.js";

import schema from "./schema/schema.js";

import workoutRouter from "./routes/workouts.js";
import exercisesRouter from "./routes/exercises.js";
import setsRouter from "./routes/sets.js";

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

await client.connect();

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
