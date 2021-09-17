// Import ExpressJS, bodyParser, mongoose
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Use .env variable
require("dotenv").config();

// Initialize our express app
const app = express();

// Connecting to the database
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
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
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(path, student);

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
