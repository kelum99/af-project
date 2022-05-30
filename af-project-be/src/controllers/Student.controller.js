const Student = require("../Models/Student");
const jwt_decode = require("jwt-decode");

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