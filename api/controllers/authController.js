const AuthServices = require('../services/usuarioService')

const authServices = new AuthServices()

class AuthController {
    static async login(req, res) {
        const { email, senha } = req.body

        const login = await authServices.login({email, senha})

        res.status(200).send(login)
    }
}

module.exports = AuthController