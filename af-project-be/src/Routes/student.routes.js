const router = require("express").Router();
const userController = require("../controllers/Student.controller");

router.post("/", userController.createStudent);
