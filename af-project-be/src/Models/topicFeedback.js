const mongoose = require("mongoose");

const topicFeedback = new mongoose.Schema({
    groupID: {
        type: String,
        
    },
    feedback: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true, 
    },

});

const TopicFeedback = mongoose.model("topicFeedback", topicFeedback );
module.exports = TopicFeedback;