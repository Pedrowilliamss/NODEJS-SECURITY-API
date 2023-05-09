const { Router } = require('express')

const router= Router()

router
    .post('/roles')
    .get('/roles')
    .get('/roles/:id')
    .delete('/roles/:id')
    .put('/roles/:id')   

module.exports = router