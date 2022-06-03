const mongoose = require("mongoose");

const MarkingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
  },
});

const markingSchema = mongoose.model("markingSchema", MarkingSchema);
module.exports = markingSchema;
