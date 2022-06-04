const mongoose = require("mongoose");

const DocumentSubmissionSchema = new mongoose.Schema({
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

const docsubmissionSchema = mongoose.model("Document Submission", DocumentSubmissionSchema);
module.exports = docsubmissionSchema;
