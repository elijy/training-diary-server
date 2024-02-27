import graphql from "graphql";

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

export const SetType = new GraphQLObjectType({
  name: "Set",
  fields: {
    id: { type: GraphQLString },
    weight: { type: GraphQLInt },
    reps: { type: GraphQLInt },
  },
});
