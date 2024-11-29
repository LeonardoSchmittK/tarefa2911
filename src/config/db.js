const mongoose = require("mongoose");

const dbConfig = {
  uri: "mongodb://localhost:27017/escola",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 5,
    serverSelectionTimeoutMS: 30000,
  },
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.uri, dbConfig.options);
    console.log("Conexão com MongoDB estabelecida!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
