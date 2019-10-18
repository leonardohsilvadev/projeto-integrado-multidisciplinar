const moment = require('moment')

module.exports = app => {
    const getViagens = (req, res) => {
        const date = req.query.date ? req.query.date : moment().endOf('day').toDate()

        app.db('viagens')
        .where({ motoristaId: req.motorista.id })
        .where('dt_inicio', '<=', date)
        .orderBy('dt_inicio')
        .then(viagens => res.json(viagens))
        .catch(err => res.status(500).json(err))
    }

    const save = (req, res) => {
        if (!req.body.desc.trim()) {
            return res.status(400).send('Descrição é obrigatória')
        }
        
        req.body.motoristaId = req.motorista.id

        app.db('viagens')
        .insert(req.body)
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) => {
        app.db('viagens')
        .where({ id: req.params.id, motoristaId: req.motorista.id })
        .del()
        .then(rowDeleted => {
            if (rowDeleted > 0) {
                res.status(204).send()
            } else {
                const msg = `Não foi possível encontrar a viagem com o id ${req.params.id}.`
                res.status(400).send(msg)
            }
        })
        .catch(err => res.status(400).json(err))
    }

    const updateViagemDoneAt = (req, res, dt_fim) => {
        app.db('viagens')
        .where({ id: req.params.id, motoristaId: req.motorista.id })
        .update({ dt_fim })
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))
    }

    const toggleViagem = (req, res) => {
        app.db('viagens')
        .where({ id: req.params.id, motoristaId: req.motorista.id })
        .first()
        .then(viagens => {
            if (!viagens) {
                const msg = `Task com id ${req.params.id} não encontrada.`
                return res.status(400).send(msg)
            }

            const dt_fim = viagens.dt_fim ? null : new Date()
            updateViagemDoneAt(req, res, dt_fim)
        })
        .catch(err => res.status(400).json(err))
    }

    return { getViagens, save, remove, toggleViagem }
}