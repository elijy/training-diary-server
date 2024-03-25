/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("exercises", {
    id: "id",
    name: {
      type: "varchar",
      notNull: true,
    },
    workoutId: {
      type: "integer",
      references: "workouts",
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
  pgm.dropTable("exercises");
};
