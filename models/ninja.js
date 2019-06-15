const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//add in geo location
const GeoSchema = new Schema({
  type: {
    default: "Point",
    type: String
  },
  coordinates: {
    type: [Number],
    index: "2d"
  }
});

// create ninja Schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
