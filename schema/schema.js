import graphql from "graphql";
import { RootQuery } from "./root.js";

const { GraphQLSchema } = graphql;

export default new GraphQLSchema({
  query: RootQuery,
});
