import pg from "pg";

export const client = new pg.Client({
  host: "localhost",
  port: 5432,
  database: "training-diary",
  user: "elijy",
  password: "",
});
