const router = require("express").Router();
const presentationEvaluationController = require("../controllers/presentation.controller");

router.post("/", presentationEvaluationController.createpresentationEvaluation);

router.get("/", presentationEvaluationController.getpresentationEvaluation);

router.get("/", presentationEvaluationController.getAllpresentationEvaluation);

router.delete("/:id", presentationEvaluationController.deletepresentationEvaluation);

router.put("/:id", presentationEvaluationController.updatepresentationEvaluation);

module.exports = router;