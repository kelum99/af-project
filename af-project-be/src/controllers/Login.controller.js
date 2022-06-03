const Student = require("../Models/Student");
const Staff = require("../Models/staff");
const jwt = require("jsonwebtoken");

exports.Studentlogin = async (req, res) => {
  try {
    const { studentId, password } = req.body;
    console.log("axx", req.body);
    const result = await Student.findOne({
      $and: [{ studentId }, { password }],
    });
    console.log("adsadas", result);
    if (result) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: {
            userId: result._id,
            email: result.email,
            studentId: result.studentId,
            name: result.name,
            role: result.role,
            group: result.groupId,
          },
        },
        "secret"
      );
      res.send({
        message: "success",
        data: {
          token,
          userId: result._id,
          email: result.email,
          studentId: result.studentId,
          name: result.name,
          role: result.role,
          group: result.groupId,
        },
      });
    }
  } catch (err) {
    console.log("login requsee eror ", err);
    res.status(500).send({ message: "failed", data: err });
  }
};

exports.Stafflogin = async (req, res) => {
  try {
    const { staffId, password } = req.body;

    const result = await Staff.findOne({
      $and: [{ staffId }, { password }],
    });

    if (result) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: {
            userId: result._id,
            email: result.email,
            role: result.role,
            staffId: result.staffId,
            name: result.fullname,
          },
        },
        "secret"
      );
      res.send({
        message: "success",
        data: {
          token,
          userId: result._id,
          email: result.email,
          role: result.role,
          staffId: result.staffId,
          name: result.fullname,
        },
      });
    } else {
      res.status(401).send({ message: "Check email or password" });
    }
  } catch (err) {
    console.log("login requsee eror ", err);
    res.status(500).send({ message: "failed", data: err });
  }
};
