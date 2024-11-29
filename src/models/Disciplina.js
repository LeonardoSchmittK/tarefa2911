const mongoose = require("mongoose");

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  curso: { type: mongoose.Schema.Types.ObjectId, ref: "Curso" },
});

module.exports = mongoose.model("Disciplina", DisciplinaSchema);
