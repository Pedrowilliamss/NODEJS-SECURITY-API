const { verify, decode } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonScret')
const jsonScret = require('../config/jsonScret')

module.exports = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).send('Access token não informado')
    }

    const [, acessToken] = token.split(' ')

    try {
        verify(acessToken, jsonScret.secret)

        const {id, email} = await decode(acessToken)

        req.usuarioId = id
        req.usuarioEmail = email

        return next()
    } catch (error) {
        res.status(401).send('Usuario não autorizado')
    }
}