// 'use strict'

// // dependências
// const express = require('express');
// const app = express();

// const bodyParser = require('body-parser');

// const mssql = require('mssql');

// const http = require('http');
// const path = require('path');

// // Rotas
// const index = require('./routes/index');
// const motoristas = require('./routes/motoristas');

// // Converter objetos json

// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.use(bodyParser.json());

// // Middleware
// app.use((req, res, next) => {
//     // Acesso às conexões requeridas
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*', 'Origin, X-Requested-With, Content-Type, Accept', 'application/json', 'text/json');

//     res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     next();
// });

// app.use('/', index);

// app.use('/motoristas', motoristas);

// app.get('json/usuarios', (req, res, next) => {
//     const request = new mssql.Request();
//     request.query('SELECT * FROM empresas', (err, result) => {
//         if(err) {
//             return next('erro: ', err);
            
//             // const data = {};
//             // data = result.recordset;
//             // res.send(data);
//         };
//     })
// });

// module.exports = meuapp;