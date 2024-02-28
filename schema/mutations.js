import graphql from "graphql";
import axios from "axios";

import { WorkoutType } from "./workout.js";
import { ExerciseType } from "./exercises.js";

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
  },
});
