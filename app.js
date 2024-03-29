const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const neo4jRouter = require("./server/routes/index");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", neo4jRouter);

module.exports = app;
// on application exit:
// await driver.close()