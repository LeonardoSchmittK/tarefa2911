const mongoose = require("mongoose");

const TurmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: "Professor" },
  alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Aluno" }],
});

module.exports = mongoose.model("Turma", TurmaSchema);
