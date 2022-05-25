const router = require("express").Router();
const MarkingSchemaController = require("../controllers/MarkingSchema.controller");

router.post("/", MarkingSchemaController.CreateMarkingSchema);
router.get("/", MarkingSchemaController.getAllMarkingSchemas);
router.get("/:id", MarkingSchemaController.getMarkingSchema);
router.put("/:id", MarkingSchemaController.updateMarkingSchema);

module.exports = router;
