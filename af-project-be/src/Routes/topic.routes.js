const router = require("express").Router();
const topicController = require("../controllers/topic.controller");

router.post("/", topicController.createTopic);

router.get("/:id", topicController.getTopic);

router.get("/", topicController.getAllTopics);

router.delete("/:id", topicController.deleteTopic);

router.put("/:id", topicController.updateTopic);

module.exports = router;
