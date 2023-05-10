const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonScret = require('../config/jsonScret')

class AuthService {
    async login(dto) {
        const usuario = await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })

        if (!usuario) {
            throw new Error('Usuario não cadastrado')
        }

        const senhasIguais = await compare(dto.senha, usuario.senha)

        if(!senhasIguais){
            throw new Error('Usuario ou senha invalido')
        }

        const acessToken = sign({
            id: usuario.id,
            email: usuario.email
        }, jsonScret.secret, {
            expiresIn: 86400
        })

        return { acessToken }
    }
}

module.exports = AuthService