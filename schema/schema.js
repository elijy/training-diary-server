import graphql from "graphql";
import axios from "axios";

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } =
  graphql;

const WorkoutType = new GraphQLObjectType({
  name: "Workout",
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    workout: {
      type: new GraphQLList(WorkoutType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3001/workouts`)
          .then((res) => res.data);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
