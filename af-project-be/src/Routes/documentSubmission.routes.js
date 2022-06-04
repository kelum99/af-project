const router = require("express").Router();
const DocumentSubmissionController = require("../controllers/DocumentSubmission.controller");

router.post("/", DocumentSubmissionController.addDocument);

module.exports = router;
