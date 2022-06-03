const router = require("express").Router();
const staffController = require("../controllers/staff.controller");

router.post("/", staffController.createStaff);

router.get("/:id", staffController.getStaff);

router.get("/", staffController.getAllStaff);

router.delete("/:id", staffController.deleteStaff);

router.put("/:id", staffController.updateStaff);

module.exports = router;



