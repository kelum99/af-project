const Resources = require("../Models/Resources");

exports.addRescource = async (req, res) => {
  try {
    const resource = new Resources(req.body);
    const data = await resource.save();
    if (data) {
      res.status(201).send({ message: "Success!", data });
    } else {
      res.status(400).send({ message: "Failed!", data });
    }
  } catch (e) {
    console.log("Error", e);
  }
};

exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resources.find({});
    res.json(resources);
  } catch (e) {
    console.log("Error", e);
  }
};
