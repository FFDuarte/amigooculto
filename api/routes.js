const express = require('express');
const routes = express.Router();
const nodemailer = require('nodemailer')
const Usuario = require('./controllers/usuarios.controllers');

const user = "fabricio@ffduarte.com";
const pass = "Fa157953@";




routes.get('/', Usuario.index);

//rotas de usuarios
routes.post('/api/usuarios', Usuario.criar);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.pesquisar/:_id',Usuario.pesquisar)
routes.delete('/api/usuarios/:_id',Usuario.deletar)
routes.put('/api/usuarios',Usuario.atualizar);



module.exports = routes;

