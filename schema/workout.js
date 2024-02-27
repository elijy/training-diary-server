import graphql from "graphql";
import axios from "axios";
import { ExerciseType } from "./exercises.js";

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

export const WorkoutType = new GraphQLObjectType({
  name: "Workout",
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    exercises: {
      type: new GraphQLList(ExerciseType),
      async resolve(parentValue, args) {
        const res = await axios.get(
          `http://localhost:3001/exercises?workoutId=${parentValue.id}`
        );
        return res.data;
      },
    },
  },
});
