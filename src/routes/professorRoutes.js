const express = require("express");
const router = express.Router();
const professorController = require("../controllers/professorController");

router.get("/getProfessores", professorController.getProfessores);
router.get("/", professorController.helloProfessores);
router.post("/", professorController.createProfessor);

module.exports = router;
