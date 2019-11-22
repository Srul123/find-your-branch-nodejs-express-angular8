const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  field_latitude: {
    type: String,
    required: true
  },
  field_longitude: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("city", CitySchema);
