const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  facalty: {
    type: String,
    required: true
  },
  groupid: {
    type: String,
    required: true
  },
  researchtopic: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  feedback: {
    type: String
  },
  status: {
    type: String
  },
  panelMember: {
    type: String
  }
});

const topic = mongoose.model("Topics", topicSchema);
module.exports = topic;
