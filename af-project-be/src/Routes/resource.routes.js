const router = require("express").Router();
const ResourcesController = require("../controllers/Resources.controller");
const DocumentEvaluationController = require("../controllers/DocumentSubmission.controller");

router.post("/", ResourcesController.addRescource);
router.get("/", ResourcesController.getAllResources);

router.post("/document/", DocumentEvaluationController.addDocument);
router.get("/document/", DocumentEvaluationController.getAllDocuments);

module.exports = router;
