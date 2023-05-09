const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./usuariosRoute')
const auth = require('./authRoute')
const rouler = require("./rolesRoute")

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    produto,
    rouler
  )
}
