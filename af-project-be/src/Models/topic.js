const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    groupid: {
    type: String,
    required: true,
  },
  researchtopic: {
    type: String,
    required: true,
  },
  registernumbers: {
    type: Number,
    required: true,
  },
 
});

const topic = mongoose.model("Topics", topicSchema);
module.exports = topic;
