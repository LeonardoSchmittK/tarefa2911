const mongoose = require("mongoose");

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  duracao: { type: Number, required: true }, // Exemplo: duração em meses
});

module.exports = mongoose.model("Curso", CursoSchema);
