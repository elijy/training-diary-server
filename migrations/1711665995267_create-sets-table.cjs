/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("sets", {
    id: "id",
    weight: {
      type: "integer",
    },
    reps: {
      type: "integer",
    },
    exerciseId: {
      type: "integer",
      references: "exercises",
      onDelete: "cascade",
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("sets");
};
