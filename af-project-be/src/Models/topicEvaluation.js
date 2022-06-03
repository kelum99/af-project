const mongoose = require("mongoose");

const topicEvaluation = new mongoose.Schema({
    groupID: {
        type: String,
        required: true,
    },
    researchTopic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const TopicEvaluation = mongoose.model("topicEv", topicEvaluation );
module.exports = TopicEvaluation;