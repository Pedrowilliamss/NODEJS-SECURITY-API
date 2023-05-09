const { Router } = require('express')
const permissaoController = require('../controllers/permissaoController')

const router = Router()

router
    .post('/permissao')
    .get('/permissao')
    .get('/permissao/:id')
    .delete('/permissao/:id')
    .put('/permissao/:id')

module.exports = router