const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signinMotoristas = async (req, res) => {
        if (!req.body.email || !req.body.senha) {
            return res.status(400).send('Dados incompletos')
        }

        const motorista = await app.db('motoristas')
        .where({ email: req.body.email })
        .first()

        if (motorista) {
            bcrypt.compare(req.body.senha, motorista.senha, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send()
                }

                const payload = { id: motorista.id }
                res.json({
                    motorista: motorista.nome,
                    email: motorista.email,
                    token: jwt.encode(payload, authSecret),
                })
            })
        } else {
            res.status(400).send('Usuário não cadastrado')
        }
    }

    return { signinMotoristas }
}