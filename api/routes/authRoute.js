const { Router } = require('express')
const AuthController = require('../controllers/authController')

const authController = new AuthController()

const router = Router()

router
    .post('auth/login')

module.exports = router