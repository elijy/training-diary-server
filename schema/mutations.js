import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import axios from "axios";

import { WorkoutType } from "./workout.js";
import { ExerciseType } from "./exercises.js";
import { SetType } from "./sets.js";

import { client } from "../db/index.js";

export const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addWorkout: {
      type: WorkoutType,
      args: {
        date: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { date }) {
        const { rows } = await client.query(
          "INSERT INTO workouts(date) VALUES ($1) RETURNING *;",
          [date]
        );

        return rows[0];
      },
    },
    deleteWorkout: {
      type: WorkoutType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parentValue, { id }) {
        const { rows } = await client.query(
          "DELETE FROM workouts WHERE id=$1 RETURNING *;",
          [id]
        );

        return rows[0];
      },
    },
    addExercise: {
      type: ExerciseType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        workoutId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parentValue, { name, workoutId }) {
        const { rows } = await client.query(
          'INSERT INTO exercises(name, "workoutId") VALUES ($1, $2) RETURNING *;',
          [name, workoutId]
        );

        return rows[0];
      },
    },
    editExercise: {
      type: ExerciseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        workoutId: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { id, name, workoutId }) {
        const res = await axios.put(`http://localhost:3001/exercises/${id}`, {
          name,
          workoutId,
        });
        return res.data;
      },
    },
    deleteExercise: {
      type: ExerciseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parentValue, { id }) {
        const { rows } = await client.query(
          "DELETE FROM exercises WHERE id=$1 RETURNING *;",
          [id]
        );

        return rows[0];
      },
    },
    addSet: {
      type: SetType,
      args: {
        weight: { type: GraphQLInt },
        reps: { type: GraphQLInt },
        exerciseId: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { weight, reps, exerciseId }) {
        const res = await axios.post(`http://localhost:3001/sets`, {
          weight,
          reps,
          exerciseId,
        });
        return res.data;
      },
    },
    deleteSet: {
      type: SetType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { id }) {
        const res = await axios.delete(`http://localhost:3001/sets/${id}`);
        return res.data;
      },
    },
  },
});
