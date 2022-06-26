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
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Import routes for the students
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
