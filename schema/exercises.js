import graphql from "graphql";

const { GraphQLObjectType, GraphQLString } = graphql;

export const ExerciseType = new GraphQLObjectType({
  name: "Exercise",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});
