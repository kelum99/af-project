const router = require("express").Router();
const topicEvaluation = require("../controllers/topicEvaluation.controller");

router.post("/", topicEvaluation.createtopicEvaluation);

router.get("/:id", topicEvaluation.gettopicEvaluation);

router.get("/", topicEvaluation.getAlltopicEvaluation);

router.delete("/:id", topicEvaluation.deletetopicEvaluation);

router.put("/:id", topicEvaluation.updatetopicEvaluation);
module.exports = router;
