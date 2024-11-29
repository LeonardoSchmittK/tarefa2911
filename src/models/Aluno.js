const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  matricula: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Aluno", AlunoSchema);
