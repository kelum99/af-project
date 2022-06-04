const router = require("express").Router();
const DocumentSubmissionController = require("../controllers/DocumentSubmission.controller");

router.post("/", DocumentSubmissionController.addDocument);
router.get("/", DocumentEvaluationController.getAllDocuments);

module.exports = router;
