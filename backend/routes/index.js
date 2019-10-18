'use strict'
//Dependências
const express = require('express')
const app = express()

const router = express.Router();

// Página Principal
router.get('/', (req, res, next) => {
    res.render('index', { title: 'PÁGINA INICIAL' });
})

module.exports = router;