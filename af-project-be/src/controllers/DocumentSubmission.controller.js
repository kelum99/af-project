const DocumentSubmission = require("../Models/DocumentSubmission");

exports.addDocument = async (req, res) => {
    try {
        const doc = new DocumentSubmission(req.body);
        const data = await doc.save();
    if (data) {
        res.status(201).send({ message: "Success!", data });
    } else {
        res.status(400).send({ message: "Failed!", data });
    }
    } catch (e) {
        console.log("Error", e);
    }
};
