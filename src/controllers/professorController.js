const Professor = require("../models/Professor");

exports.getProfessores = async (req, res) => {
  const professores = await Professor.find();
  res.json(professores);
};

exports.helloProfessores = async (req, res) => {
  res.send("Olá, aqui você encontra informações sobre os professores");
};

exports.createProfessor = async (req, res) => {
  const professor = new Professor(req.body);
  await professor.save();
  res.status(201).json(professor);
};
