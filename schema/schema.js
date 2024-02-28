import graphql from "graphql";

import { RootQuery } from "./root.js";
import { mutation } from "./mutations.js";

const { GraphQLSchema } = graphql;

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
