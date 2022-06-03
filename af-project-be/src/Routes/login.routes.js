const router = require("express").Router();
const loginController = require("../controllers/Login.controller");

router.post("/student/", loginController.Studentlogin);
router.post("/staff/", loginController.Stafflogin);

module.exports = router;
