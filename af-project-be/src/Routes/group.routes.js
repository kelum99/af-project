const router = require("express").Router();
const GroupController = require("../controllers/Group.controller");

router.post("/", GroupController.createGroup);

router.delete("/:id",GroupController.deleteGroup);

router.get("/:id",GroupController.getGroup);

router.get("/",GroupController.getAllGroups );

module.exports = router;