const Student = require("../Models/Student");

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    if (savedStudent) {
      res.status(201).send({ message: "success!", data: savedStudent });
    } else {
      res.status(400).send({ message: "failed!", data: savedStudent });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (e) {
    console.log("Error", e);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateStudent = await Student.updateOne(
        { _id: req.params.id },
        { ...data }
      );
      console.log("updated ", updateStudent);
      res.status(200).send({ message: "success", data: updateStudent });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    res.json(deleteStudent);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};
