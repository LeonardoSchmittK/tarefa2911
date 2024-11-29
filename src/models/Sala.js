const mongoose = require("mongoose");

const SalaSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  capacidade: { type: Number, required: true },
});

module.exports = mongoose.model("Sala", SalaSchema);