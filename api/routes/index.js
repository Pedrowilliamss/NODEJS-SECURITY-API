const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./usuariosRoute')
const auth = require('./authRoute')
const role = require('./rolesRoute')
const permissao = require('./permissaoRoute')
const seguranca = require('./segurancaRouter')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    produto,
    role,
    permissao,
    seguranca
  )
}
