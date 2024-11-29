const Aluno = require("../models/Aluno");

exports.getAlunos = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

exports.createAluno = async (req, res) => {
  const aluno = new Aluno(req.body);
  await aluno.save();
  res.status(201).json(aluno);
};
