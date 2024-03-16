import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlHTTP as expressGraphQL } from "express-graphql";
import pg from "pg";

import schema from "./schema/schema.js";

import workoutRouter from "./routes/workouts.js";
import exercisesRouter from "./routes/exercises.js";
import setsRouter from "./routes/sets.js";

const app = express();
const port = 3005;

const client = new pg.Client({
  host: "localhost",
  port: 5432,
  database: "training-diary",
  user: "elijy",
  password: "",
});

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
