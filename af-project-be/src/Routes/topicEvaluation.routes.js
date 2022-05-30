const router = require("express").Router();
const topicEvaluation = require("../controllers/topicEvaluation.controller");

router.post("/", topicEvaluation.createtopicEvaluation);
router.get("/", topicEvaluation.gettopicEvaluation);
router.get("/", topicEvaluation.getAlltopicEvaluation);

module.exports = router;