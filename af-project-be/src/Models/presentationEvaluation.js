const mongoose = require("mongoose");

const presentationEvluationSchema = new mongoose.Schema({

    groupid: {
        type: String,
        required: true,
    },
    member1:  {
        type: String,
        required: true,
    },
    member2:  {
        type: String,
        required: true,
    },
    member3:  {
        type: String,
        required: true,
    },
    member4:  {
        type: String,
        required: true,
    },

});

const PresentationEvluation = mongoose.model("Presentation", presentationEvluationSchema);
module.exports = PresentationEvluation;