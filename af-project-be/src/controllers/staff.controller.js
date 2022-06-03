const Staff = require("../Models/staff");

exports.createStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    const savedStaff = await staff.save();
    if (savedStaff) {
      res.status(201).send({ message: "success!", data: savedStaff });
    } else {
      res.status(400).send({ message: "failed!", data: savedStaff });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    res.json(staff);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find({});
    res.json(staff);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const deleteStaff = await Staff.findByIdAndDelete(req.params.id);
    res.json(deleteStaff);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateStaff = await Staff.updateOne(
        { _id: req.params.id },
        { ...data }
      );
      console.log("updated ", updateStaff);
      res.status(200).send({ message: "success", data: updateStaff });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};
