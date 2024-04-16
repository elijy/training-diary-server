import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlHTTP as expressGraphQL } from "express-graphql";
import { client } from "./db/index.js";

import schema from "./schema/schema.js";

const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

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
