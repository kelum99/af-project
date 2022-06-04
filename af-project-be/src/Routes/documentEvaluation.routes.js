const router = require("express").Router();
const DocumentEvaluationController = require("../controllers/DocumentSubmission.controller");

router.get("/", DocumentEvaluationController.getAllDocuments);

module.exports = router;