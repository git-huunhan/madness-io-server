// Import ExpressJS, bodyParser, mongoose
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");

// Use .env variable
require("dotenv").config();

// Initialize our express app
const app = express();

// Connecting to the database
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...");
    process.exit();
  });

// Import routes for the students
const student = require("./routes/student");
const path = process.env.PATH_STRING;
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

readdirSync("./routes").map((r) =>
  app.use("/students", require("./routes/" + r))
);

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
