const Topic = require("../Models/topic");

exports.createTopic = async (req, res) => {
  try {
    const topic = new Topic(req.body);
    const savedTopic = await topic.save();
    if (savedTopic) {
      res.status(201).send({ message: "success!", data: savedTopic });
    } else {
      res.status(400).send({ message: "failed!", data: savedTopic });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getTopic = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    res.json(topic);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.json(topics);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.deleteTopic = async (req, res) => {
  try {
    const deleteTopic = await Topic.deleteOne(req.params);
    res.json(deleteTopic);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateTopic = await Topic.updateOne(
        { _id: req.params.id },
        { ...data }
      );
      console.log("updated ", updateTopic);
      res.status(200).send({ message: "success", data: updateTopic });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateTpopicFeedback = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateStatus = await Topic.updateOne(
        { groupid: req.params.groupId },
        {
          $set: {
            status: data.status,
            feedback: data.feedback,
          },
        }
      );
      console.log("updated ", updateStatus);
      res.status(200).send({ message: "success", data: updateStatus });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};
