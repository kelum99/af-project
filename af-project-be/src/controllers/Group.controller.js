const Group = require("../Models/Group");

exports.createGroup = async (req, res) => {
  try {
    const group = new Group(req.body);
    const savedGroup = await group.save();
    if (savedGroup) {
      res.status(201).send({ message: "success!", data: savedGroup });
    } else {
      res.status(400).send({ message: "failed!", data: savedGroup });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getGroup = async (req, res) => {
  try {
    const group = await Group.find(req.params);
    res.json(group);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find({});
    res.json(groups);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllGroupsBySupervisor = async (req, res) => {
  try {
    const groups = await Group.find(req.params);
    res.json(groups);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.deleteGroup = async (req, res) => {
  try {
    const deleteGroup = await Group.deleteOne(req.params);
    res.json(deleteGroup);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateGroupStatus = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateStatus = await Group.updateOne(
        { groupId: req.params.groupId },
        {
          $set: {
            status: data.status,
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
