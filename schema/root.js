import graphql from "graphql";
import axios from "axios";

import { WorkoutType } from "./workout.js";
import { ExerciseType } from "./exercises.js";
import { SetType } from "./sets.js";

import { client } from "../db/index.js";

const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } =
  graphql;

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    workouts: {
      type: new GraphQLList(WorkoutType),
      async resolve() {
        const { rows } = await client.query(
          "SELECT * FROM workouts ORDER BY date DESC;"
        );
        return rows.map((row) => ({ ...row, date: row.date.toString() }));
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
      args: {
        exerciseId: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { exerciseId }) {
        const res = await axios.get(
          `http://localhost:3001/sets?exerciseId=${exerciseId}`
        );
        return res.data;
      },
    },
  },
});
