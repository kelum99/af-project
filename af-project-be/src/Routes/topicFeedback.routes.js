const router = require("express").Router();
const topicFeedback = require("../controllers/topicFeedback.controller");

router.post("/", topicFeedback.createtopicFeedback);

router.get("/:id", topicFeedback.gettopicFeedback);

router.get("/", topicFeedback.getAlltopicFeedback);

module.exports = router;