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
    addExercise: {
      type: ExerciseType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        workoutId: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { name, workoutId }) {
        const res = await axios.post(`http://localhost:3001/exercises`, {
          name,
          workoutId,
        });
        return res.data;
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
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { id }) {
        const res = await axios.delete(`http://localhost:3001/exercises/${id}`);
        return res.data;
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
