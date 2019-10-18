'use strict'

const express = require('express')
const router = express.Router()

// Rota Motoristas
router.get('/', (req, res, next) => {
    res.send('Ok').status(200);
});

module.exports = router;