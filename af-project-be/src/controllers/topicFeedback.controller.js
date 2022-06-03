const topicFeedback = require("../Models/topicFeedback");

exports.createtopicFeedback = async (req, res) => {
    try {
      const TopicFeedback = new topicFeedback(req.body);
      const savedtopicFeedback= await TopicFeedback.save();
      if (savedtopicFeedback) {
        res.status(201).send({ message: "success!", data: savedtopicFeedback });
      } else {
        res.status(400).send({ message: "failed!", data: savedtopicFeedback });
      }
    } catch (e) {
      console.log("error", e);
      res.status(500).send({ message: "error", data: e });
    }
  };
  
  exports.gettopicFeedback = async (req, res) => {
    try {
      const TopicFeedback = await topicFeedback.findById(req.params.id);
      res.json(TopicFeedback);
    } catch (e) {
      console.log("error", e);
      res.status(500).send({ message: "error", data: e });
    }
  };

  exports.getAlltopicFeedback = async (req, res) => {
    try {
      const TopicFeedback = await topicFeedback.find({});
      res.json(TopicFeedback);
    } catch (e) {
      console.log("error", e);
      res.status(500).send({ message: "error", data: e });
    }
  };