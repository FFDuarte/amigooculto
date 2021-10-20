const express = require('express');
const routes = express.Router();
const nodemailer = require('nodemailer')
const Usuario = require('./controllers/usuarios.controllers');

const user = "fabricio@ffduarte.com";
const pass = "Fa157953@";

routes.get('/email'+email+nome,( req , res) ){

    const transporter = nodemailer.createTransport({
        host: "smtp.umbler.com" ,
        port: 587 ,
        pass: {user , pass},
        subject: "Nome da pessoa",
        text: {nome}
    })

    transporter.sendMail({
        from: user,
        to: email,

    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    })

}


routes.get('/', Usuario.index);

//rotas de usuarios
routes.post('/api/usuarios', Usuario.criar);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.pesquisar/:_id',Usuario.pesquisar)
routes.delete('/api/usuarios/:_id',Usuario.deletar)
routes.put('/api/usuarios',Usuario.atualizar);



module.exports = routes;

