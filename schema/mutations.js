import graphql from "graphql";
import axios from "axios";

import { WorkoutType } from "./workout.js";

const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = graphql;

export const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addWorkout: {
      type: WorkoutType,
      args: {
        date: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { date }) {
        const res = await axios.post(`http://localhost:3001/workouts`, {
          date,
        });
        return res.data;
      },
    },
    deleteWorkout: {
      type: WorkoutType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { id }) {
        const res = await axios.delete(`http://localhost:3001/workouts/${id}`);
        return res.data;
      },
    },
  },
});
