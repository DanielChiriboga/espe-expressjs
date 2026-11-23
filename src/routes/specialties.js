const { Router } = require("express");
const { 
    createSpecialty,
    listSpecialty,
    getSpecialty,
    updateSpecialty,
    deleteSpecialty,
    deletebyArea
 } = require("../controllers/specialtyController");

const router = Router();

router.post("/", createSpecialty);
router.get("/", listSpecialty);
router.get("/:id", getSpecialty);
router.patch("/:id", updateSpecialty);
router.delete("/:id", deleteSpecialty);
router.delete("/area/:area", deletebyArea);

module.exports = router;
