import graphql from "graphql";
import axios from "axios";

import { SetType } from "./sets.js";

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

export const ExerciseType = new GraphQLObjectType({
  name: "Exercise",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    sets: {
      type: new GraphQLList(SetType),
      async resolve(parentValue) {
        const res = await axios.get(
          `http://localhost:3001/sets?exerciseId=${parentValue.id}`
        );
        return res.data;
      },
    },
  },
});
