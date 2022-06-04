const DocumentSubmission = require("../Models/DocumentSubmission");

exports.getAllDocuments = async (req, res) => {
    try {
        const doc = await DocumentSubmission.find({});
        res.json(doc);
    } catch (e) {
    console.log("Error", e);
    }
};
