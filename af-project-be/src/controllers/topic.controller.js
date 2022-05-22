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