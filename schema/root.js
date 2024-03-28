import graphql from "graphql";

import { WorkoutType } from "./workout.js";
import { ExerciseType } from "./exercises.js";
import { SetType } from "./sets.js";

import { client } from "../db/index.js";

const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt } = graphql;

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
        workoutId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parentValue, { workoutId }) {
        const { rows } = await client.query(
          'SELECT * FROM exercises WHERE "workoutId"=$1 ORDER BY "createdAt";',
          [workoutId]
        );
        return rows;
      },
    },
    sets: {
      type: new GraphQLList(SetType),
      args: {
        exerciseId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parentValue, { exerciseId }) {
        const { rows } = await client.query(
          'SELECT * FROM sets WHERE "exerciseId"=$1 ORDER BY "createdAt";',
          [exerciseId]
        );
        return rows;
      },
    },
  },
});
