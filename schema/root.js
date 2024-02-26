import graphql from "graphql";
import axios from "axios";
import { WorkoutType } from "./workout.js";

const { GraphQLObjectType, GraphQLList } = graphql;

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    workout: {
      type: new GraphQLList(WorkoutType),
      async resolve() {
        const res = await axios.get(`http://localhost:3001/workouts`);
        return res.data;
      },
    },
  },
});
