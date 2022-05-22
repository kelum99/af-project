const router = require("express").Router();
const topicController = require("../controllers/topic.controller");

router.post("/", topicController.createTopic);

module.exports = router;
