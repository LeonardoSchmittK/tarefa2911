const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const alunoRoutes = require("./src/routes/alunoRoutes");
const professorRoutes = require("./src/routes/professorRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/alunos", alunoRoutes);
app.use("/professores", professorRoutes);

mongoose.connect("mongodb://localhost:27017/escola", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
