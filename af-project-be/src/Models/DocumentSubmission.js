const mongoose = require("mongoose");

const DocumentSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  groupId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const docsubmissionSchema = mongoose.model(
  "Document Submission",
  DocumentSubmissionSchema
);
module.exports = docsubmissionSchema;
