const topicEvaluation = require("../Models/topicEvaluation");

exports.createtopicEvaluation = async (req, res) => {
    try {
        const TopicEvaluation = new topicEvaluation(req.body);
        const savedtopicEvaluation = await TopicEvaluation.save();
        if (savedtopicEvaluation) {
          res.status(201).send({ message: "success!", data: savedtopicEvaluation });
        } else {
          res.status(400).send({ message: "failed!", data: savedtopicEvaluation });
        }
      } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
      }
};

exports.gettopicEvaluation = async (req, res) => {
    try {
        const TopicEvaluation = await topicEvaluation.findById(req.params.id);
        res.json(TopicEvaluation);
      } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
      }
};

exports.getAlltopicEvaluation = async (req, res) => {
    try {
        const TopicEvaluation = await topicEvaluation.find({});
        res.json(TopicEvaluation);
      } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
      }
};

exports.updatetopicEvaluation = async (req, res) => {
    try {
      const data = req.body;
      if (data) {
        const updatetopicEvaluation = await topicEvaluation.updateOne(
          { _id: req.params.id },
          { ...data }
        );
        console.log("updated ", updatetopicEvaluation);
        res.status(200).send({ message: "success", data: updatetopicEvaluation });
      } else {
        res.status(204).send({ message: "update data can not be empty!" });
      }
    } catch (e) {
      console.log("error", e);
      res.status(500).send({ message: "error", data: e });
    }
  };
  

  exports.deletetopicEvaluation = async (req, res) => {
    try {
      const deletetopicEvaluation = await topicEvaluation.findByIdAndDelete(req.params.id);
      res.json(deletetopicEvaluation);
    } catch (e) {
      console.log("error", e);
      res.status(500).send({ message: "error", data: e });
    }
  };