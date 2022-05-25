const MarkingSchema = require("../Models/MarkingSchema");

exports.CreateMarkingSchema = async (req, res) => {
  try {
    const markingSchema = new MarkingSchema(req.body);
    const data = await markingSchema.save();
    if (data) {
      res.status(201).send({ message: "Success!", data });
    } else {
      res.status(400).send({ message: "Failed!", data });
    }
  } catch (e) {
    console.log("Error", e);
  }
};

exports.getAllMarkingSchemas = async (req, res) => {
  try {
    const markingSchemas = await MarkingSchema.find({});
    res.json(markingSchemas);
  } catch (e) {
    console.log("Error", e);
  }
};

exports.getMarkingSchema = async (req, res) => {
  try {
    const markingSchema = await MarkingSchema.findById(req.params.id);
    res.json(markingSchema);
  } catch (e) {
    console.log("Error", e);
  }
};

exports.updateMarkingSchema = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateMarking = await MarkingSchema.updateOne(
        { _id: req.params.id },
        { ...data }
      );
      console.log("updated ", updateMarking);
      res.status(200).send({ message: "success", data: updateMarking });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};
