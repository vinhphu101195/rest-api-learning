const express = require("express");
const bodyParser = require("body-parser");

//set up express app
const app = express();

app.use(bodyParser.json());

//initialize routes
app.use("/api", require("./routes/api"));

app.listen(process.env.port || 3000, function() {
  console.log("now listening for request");
});
