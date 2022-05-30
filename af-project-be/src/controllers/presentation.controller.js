const presentationEvaluation = require("../Models/presentationEvaluation");

exports.createpresentationEvaluation = async (req, res) => {

    try {
        const PresentationEvaluation = new presentationEvaluation(req.body);
        const savedpresentationEvaluation = await PresentationEvaluation.save();
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
        const PresentationEvaluation = await presentationEvaluation.findById(req.params.id);
        res.json(PresentationEvaluation);
      } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
      }
};

exports.getAllpresentationEvaluation = async (req, res) => {

    try {
        const PresentationEvaluation = await presentationEvaluation.find({});
        res.json(PresentationEvaluation);
      } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
      }
};