import graphql from "graphql";
import axios from "axios";

import { WorkoutType } from "./workout.js";
import { ExerciseType } from "./exercises.js";
import { SetType } from "./sets.js";

const { GraphQLObjectType, GraphQLList } = graphql;

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
      async resolve() {
        const res = await axios.get(`http://localhost:3001/exercises`);
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
