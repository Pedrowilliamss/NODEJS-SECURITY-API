const AuthServices = require('../services/usuarioService')

const authServices = new AuthServices()

class AuthController {
    static async login(req, res) {
        const { email, senha } = req.body

        try {
            const login = await authServices.login({email, senha})
    
            res.status(200).send(login)
        } catch (error) {
            res.status(401).send({ message: error.message})
        }

    }
}

module.exports = AuthController