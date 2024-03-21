import mongoose from "mongoose";
import config from "./config/config";

mongoose.connect(config.DB.LOCAL_DB);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connected");
});

connection.on("error", () => {
  console.log("Error connecting to database");
  process.exit(0);
});
