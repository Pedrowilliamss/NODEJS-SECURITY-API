const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController.js')
const roles = require('../middleware/roles.js')
const permissoes = require('../middleware/permissoes.js')

const router = Router()

router
  .post('/produto', ProdutoController.cadastrarProduto)
  .get('/produto', permissoes(['editar']) ,ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id', ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', ProdutoController.editarProduto)

module.exports = router