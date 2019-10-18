const express = require('express')
const mysql = require('mysql')

const routes = express.Router()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trismegisto'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro: ' , err);
        return;
    }
    console.log('Conexão ao Banco de Dados Realizada com Sucesso!');
});

routes.get('/empresas', (req, res) => {
    connection.query('select * from empresas', (err, rows, fields) => {
        if (!err) {
            res.json('Response:' , rows);
        } else {
            res.json('Erro:' , err);
        }
    })
});