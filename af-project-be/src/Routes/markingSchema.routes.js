const router = require("express").Router();
const MarkingSchemaController = require("../controllers/MarkingSchema.controller");

router.post("/", MarkingSchemaController.CreateMarkingSchema);
router.get("/", MarkingSchemaController.getAllMarkingSchemas);
router.get("/:id", MarkingSchemaController.getMarkingSchema);

module.exports = router;
