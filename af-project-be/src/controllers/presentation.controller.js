const presentationEvaluation = require("../Models/presentationEvaluation");

exports.createpresentationEvaluation = async (req, res) => {

    try {
        const presentationEvaluation = new Staff(req.body);
        const savedpresentationEvaluation = await staff.save();
        if (savedpresentationEvaluation) {
          res.status(201).send({ message: "success!", data: savedpresentationEvaluation });
        } else {
          res.status(400).send({ message: "failed!", data: savedpresentationEvaluation });
        }
      } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
      }
};

exports.getpresentationEvaluation = async(req, res) => {

    try {
        const presentationEvaluation = await presentationEvaluation.findById(req.params.id);
        res.json(presentationEvaluation);
      } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
      }
};

exports.getAllpresentationEvaluation = async (req, res) => {

    try {
        const presentationEvaluation = await presentationEvaluation.find({});
        res.json(presentationEvaluation);
      } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
      }
};