import graphql from "graphql";

const { GraphQLObjectType, GraphQLString } = graphql;

export const WorkoutType = new GraphQLObjectType({
  name: "Workout",
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
  },
});
