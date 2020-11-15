const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());
const productRoute = require("./Routes/Product");

app.use("/", productRoute);

module.exports = app;
