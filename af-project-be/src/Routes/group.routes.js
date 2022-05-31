const router = require("express").Router();
const GroupController = require("../controllers/Group.controller");

router.post("/", GroupController.createGroup);

router.delete("/:id",GroupController.deleteGroup);

module.exports = router;