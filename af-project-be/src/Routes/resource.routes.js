const router = require("express").Router();
const ResourcesController = require("../controllers/Resources.controller");

router.post("/", ResourcesController.addRescource);
router.get("/", ResourcesController.getAllResources);

module.exports = router;
