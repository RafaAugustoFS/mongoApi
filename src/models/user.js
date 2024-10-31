const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
},{timestamps: true});
// Criando o modelo user dentro do mongoDb
module.exports = mongoose.model('User', userSchema);