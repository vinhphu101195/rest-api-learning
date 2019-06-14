const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = golbal.Promise;

app.use(bodyParser.json());

//initialize routes
app.use("/api", require("./routes/api"));

app.listen(process.env.port || 3000, function() {
  console.log("now listening for request");
});
