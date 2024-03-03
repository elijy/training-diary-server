import graphql from "graphql";
import axios from "axios";

import { WorkoutType } from "./workout.js";
import { ExerciseType } from "./exercises.js";
import { SetType } from "./sets.js";

const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } =
  graphql;

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    workouts: {
      type: new GraphQLList(WorkoutType),
      async resolve() {
        const res = await axios.get(`http://localhost:3001/workouts`);
        return res.data;
      },
    },
    exercises: {
      type: new GraphQLList(ExerciseType),
      args: {
        workoutId: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { workoutId }) {
        const res = await axios.get(
          `http://localhost:3001/exercises?workoutId=${workoutId}`
        );
        return res.data;
      },
    },
    sets: {
      type: new GraphQLList(SetType),
      async resolve() {
        const res = await axios.get(`http://localhost:3001/sets`);
        return res.data;
      },
    },
  },
});
