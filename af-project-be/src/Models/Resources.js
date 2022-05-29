const mongoose = require("mongoose");

const ResourcesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
});

const resourcesSchema = mongoose.model("resources", ResourcesSchema);
module.exports = resourcesSchema;
