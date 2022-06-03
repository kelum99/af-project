const router = require("express").Router();
const GroupController = require("../controllers/Group.controller");

router.post("/", GroupController.createGroup);

router.delete("/:id", GroupController.deleteGroup);

router.get("/:groupId", GroupController.getGroup);

router.get("/", GroupController.getAllGroups);

router.get(
  "/bySupervisor/:supervisor",
  GroupController.getAllGroupsBySupervisor
);

router.put("/status/:groupId", GroupController.updateGroupStatus);

module.exports = router;
