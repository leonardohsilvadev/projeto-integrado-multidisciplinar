const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())

app.use(cors());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With', 'Content-Type', 'Accept');
//     next();
// })

// const routes = express.Router()

// Conexão BD MySQL
const mysql = require('mysql');

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



// QUERIES EMPRESAS
app.get('/empresas', (req, res) => {
    connection.query('select * from empresas', (err, rows, fields) => {
        if (!err) {
            // console.log('Response:' , rows);
            res.status(200).send(rows);
        } else {
            res.json('Erro:' , err);
        }
    });
});

app.get('/empresas/:cd_empresa', (req, res) => {
    connection.query('select * from empresas where cd_empresa = ?', [req.params.cd_empresa], (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});

app.post('/empresas', (req, res) => {
    connection.query('insert into empresas (nm_empresa) values (?)', [req.body.nm_empresa], (err, rows, fields) => {
        if (!err) {
            res.status(201).send(rows);
        } else {
            res.json('Erro', err);
        }
    });
});

app.delete('/empresas', (req, res) => {
    connection.query('delete from empresas where cd_empresa = ?', [req.body.cd_empresa], (err, rows, fields) => {
        if (!err) {
            res.status(204).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});

app.put('/empresas/:cd_empresa', (req, res) => {
    connection.query('update empresas set ? where cd_empresa = ?', [req.body, req.params.cd_empresa], (err, rows, fields) => {
        if (!err) {
            res.status(204).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});



// QUERIES MOTORISTAS

app.get('/motoristas', (req, res) => {
    connection.query('select * from motoristas', (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows);
        } else {
            res.json('Erro:' , err);
        }
    });
});

app.get('/motoristas/:cd_motorista', (req, res) => {
    connection.query('select * from motoristas where cd_motorista = ?', [req.params.cd_motorista], (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});

app.post('/motoristas', (req, res) => {
    connection.query('insert into motoristas (nome, email, senha) values (?, ?, ?)', [req.body.nome, req.body.email, req.body.senha], (err, rows, fields) => {
        if (!err) {
            res.status(201).send(rows);
        } else {
            res.json('Erro', err);
        }
    });
});

app.delete('/motoristas', (req, res) => {
    connection.query('delete from motoristas where cd_motorista = ?', [req.body.cd_motorista], (err, rows, fields) => {
        if (!err) {
            res.status(204).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});

app.put('/motoristas/:cd_motorista', (req, res) => {
    connection.query('update motoristas set ? where cd_motorista = ?', [req.body, req.params.cd_motorista], (err, rows, fields) => {
        if (!err) {
            res.status(204).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});



// QUERIES VEICULOS
app.get('/veiculos', (req, res) => {
    connection.query('select * from veiculos', (err, rows, fields) => {
        if (!err) {
            // console.log('Response:' , rows);
            res.status(200).send(rows);
        } else {
            res.json('Erro:' , err);
        }
    });
});

app.get('/veiculos/:cd_veiculo', (req, res) => {
    connection.query('select * from veiculos where cd_veiculo = ?', [req.params.cd_veiculo], (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});

app.post('/veiculos', (req, res) => {
    connection.query('insert into veiculos (nm_veiculo) values (?)', [req.body.nm_veiculo], (err, rows, fields) => {
        if (!err) {
            res.status(201).send(rows);
        } else {
            res.json('Erro', err);
        }
    });
});

app.delete('/veiculos', (req, res) => {
    connection.query('delete from veiculos where cd_veiculo = ?', [req.body.cd_veiculo], (err, rows, fields) => {
        if (!err) {
            res.status(204).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});

app.put('/veiculos/:cd_veiculo', (req, res) => {
    connection.query('update veiculos set ? where cd_veiculo = ?', [req.body, req.params.cd_veiculo], (err, rows, fields) => {
        if (!err) {
            res.status(204).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});



// QUERIES VIAGENS
app.get('/viagens', (req, res) => {
    connection.query('select * from viagens', (err, rows, fields) => {
        if (!err) {
            // console.log('Response:' , rows);
            res.status(200).send(rows);
        } else {
            res.json('Erro:' , err);
        }
    });
});

app.get('/viagens/:cd_viagem', (req, res) => {
    connection.query('select * from viagens where cd_viagem = ?', [req.params.cd_viagem], (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});

app.post('/viagens', (req, res) => {
    connection.query('insert into viagens (nm_viagem) values (?)', [req.body.nm_viagem], (err, rows, fields) => {
        if (!err) {
            res.status(201).send(rows);
        } else {
            res.json('Erro', err);
        }
    });
});

app.delete('/viagens', (req, res) => {
    connection.query('delete from viagens where cd_viagem = ?', [req.body.cd_viagem], (err, rows, fields) => {
        if (!err) {
            res.status(204).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});

app.put('/viagens/:cd_viagem', (req, res) => {
    connection.query('update viagens set ? where cd_viagem = ?', [req.body, req.params.cd_viagem ], (err, rows, fields) => {
        if (!err) {
            res.status(204).send(rows);
        } else {
            res.json('Erro: ', err);
        }
    });
});


// QUERIE AUTHENTICATE

app.post('/authenticate', async (req, res) => {
    const { user, password } = req.body;

    connection.query('select cd_motorista, email, senha from motoristas where email = ?', user, (err, rows, fields) => {
        if (err) {
            res.status(400).json(err);
        } else if (rows.length === 0) {
            res.status(400).json({ error: 'Usuário não cadastrado!' });
        } else if (password !== rows[0].senha) {
            res.status(400).json({ error: 'Senha incorreta!' });
        } else {
            res.status(200).send({
                rows,
                token: generateToken({ id: rows.id }),
            });
        }
    })
})




// Executar no localhost na porta 3xxx
app.listen(3333, () => {
    console.log('Backend executando...')
})

// module.exports = connection;