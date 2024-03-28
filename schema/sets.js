import graphql from "graphql";

const { GraphQLObjectType, GraphQLInt } = graphql;

export const SetType = new GraphQLObjectType({
  name: "Set",
  fields: {
    id: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    reps: { type: GraphQLInt },
  },
});
