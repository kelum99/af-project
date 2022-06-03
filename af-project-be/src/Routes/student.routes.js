const router = require("express").Router();
const userController = require("../controllers/Student.controller");

router.post("/", userController.createStudent);
router.get("/", userController.getAllStudents);
router.put("/:id", userController.updateStudent);
router.put("/group/:studentId", userController.updateStudentGroup);
router.delete("/:id", userController.deleteStudent);

module.exports = router;
