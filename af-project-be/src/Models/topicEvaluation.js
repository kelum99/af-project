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
    researchDocs: {
        type: String,
        required: true,
    },
});

const topicEvaluation = mongoose.model("topic", topicEvaluation );
module.exports = topicEvaluation;