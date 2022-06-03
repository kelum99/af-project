const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  groupId: {
    type: String,
    required: true,
  },
  groupLeader: {
    type: String,
    required: true,
  },
  member1: {
    type: String,
    required: true,
  },
  member2: {
    type: String,
    required: true,
  },
  member3: {
    type: String,
    required: true,
  },
  supervisor: {
    type: String,
    required: true,
  },
  coSupervisor: {
    type: String,
    required: true,
  },
  panelMember: {
    type: String,
  },
  status: {
    type: String,
  },
});

const group = mongoose.model("Groups", GroupSchema);
module.exports = group;
