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
