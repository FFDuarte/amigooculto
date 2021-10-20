const mongoose = require('mongoose');


//função para enviar o usuario para o banco
const DataSchema = new mongoose.Schema({
    nome_usuario: String,
    email_usuario: String,
}, {
    timestamps:true
});


const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;

